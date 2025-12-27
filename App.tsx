import React, { useState, useEffect, useRef } from 'react';
import { UNIVERSITIES, DEFAULT_UNIVERSITY_ID, USE_BACKEND, INITIAL_BADGES } from './constants';
import { Message, Sender, UserStats, ChatSession } from './types';
import { generateResponse } from './services/geminiService';
import { getUserStats, processUserInteraction, generateUserContextSummary } from './services/statsService';
import { getChatSessions, createChatSession, addMessage, deleteChatSession } from './services/chatService';
import { isAuthenticated, logout, getUserProfile, getCurrentUser } from './services/authService';
import { DATA_UW, DATA_UOFT, DATA_MAC, DATA_WESTERN, DATA_QUEENS, DATA_TMU } from './services/campusData';
import UniversitySelector from './components/UniversitySelector';
import MessageBubble from './components/MessageBubble';
import GamificationPanel from './components/GamificationPanel';
import AboutModal from './components/AboutModal';
import EventsTab from './components/EventsTab';
import MultiFaithTab from './components/MultiFaithTab';
import FaqTab from './components/FaqTab';
import AuthScreen from './components/AuthScreen';
import Aurora from './components/Aurora';
import Sidebar from './components/Sidebar';
import { Send, GraduationCap, Info, Trash2, Trophy, Check, Star, MessageSquare, Calendar, History, Plus, ChevronDown, Heart, LogOut, HelpCircle } from 'lucide-react';

const generateId = () => Math.random().toString(36).substring(2, 9);

const App: React.FC = () => {
  // console.log("App component is initializing...");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Initial stats state
  const [userStats, setUserStats] = useState<UserStats>({
    experience: 0,
    level: 1,
    badges: INITIAL_BADGES,
    topicsExplored: [],
    messagesCount: 0,
    nextLevelXP: 100
  });

  useEffect(() => {
    const checkAuth = async () => {
      // Always check Supabase auth since chat services require it
      const authenticated = await isAuthenticated();
      setIsLoggedIn(authenticated);
      setAuthLoading(false);
    };
    checkAuth();
  }, []);

  const [selectedUniId, setSelectedUniId] = useState<string>(DEFAULT_UNIVERSITY_ID);
  const [activeTab, setActiveTab] = useState<'chat' | 'events' | 'multifaith' | 'faq'>('chat');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userEmail, setUserEmail] = useState<string>('');

  const [notification, setNotification] = useState<{ text: string, type: 'success' | 'achievement' | 'error' } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const prevUniIdRef = useRef(selectedUniId);
  const currentUniversity = UNIVERSITIES.find(u => u.id === selectedUniId) || UNIVERSITIES[0];

  const getCampusData = (id: string) => {
    switch (id) {
      case 'uw': return DATA_UW;
      case 'uoft': return DATA_UOFT;
      case 'mac': return DATA_MAC;
      case 'western': return DATA_WESTERN;
      case 'queens': return DATA_QUEENS;
      case 'tmu': return DATA_TMU;
      default: return DATA_UW;
    }
  };

  const currentCampusData = getCampusData(selectedUniId);

  // Load basic data on login
  useEffect(() => {
    if (isLoggedIn) {
      const loadData = async () => {
        try {
          // Get current user email
          const currentUser = await getCurrentUser();
          if (currentUser?.email) {
            setUserEmail(currentUser.email);
          }

          // Load User Profile for preferred university
          let profile = null;
          if (USE_BACKEND) {
            profile = await getUserProfile();
            if (profile && profile.selected_university_id) {
              setSelectedUniId(profile.selected_university_id);
              prevUniIdRef.current = profile.selected_university_id;
            }
          }

          // Load Stats
          const stats = await getUserStats();
          setUserStats(stats);

          // Load Sessions
          const userSessions = await getChatSessions();

          // Hydrate dates just in case, though service should handle it
          const hydratedSessions = userSessions.map(s => ({
            ...s,
            messages: s.messages.map(m => ({
              ...m,
              timestamp: new Date(m.timestamp)
            }))
          }));

          setSessions(hydratedSessions);

          // Select current university session if exists
          // If we loaded a profile, prefer that ID, otherwise use default/current
          const targetUniId = (profile?.selected_university_id) || selectedUniId;

          const currentUniSessions = hydratedSessions.filter(s => s.universityId === targetUniId);
          if (currentUniSessions.length > 0) {
            const latest = currentUniSessions[0];
            setCurrentSessionId(latest.id);
            setMessages(latest.messages);
          }
        } catch (error) {
          console.error("Error loading user data:", error);
        }
      };
      loadData();
    }
  }, [isLoggedIn]);

  // Handle university change
  useEffect(() => {
    if (prevUniIdRef.current !== selectedUniId) {
      prevUniIdRef.current = selectedUniId;
      const uniSessions = sessions.filter(s => s.universityId === selectedUniId);

      if (uniSessions.length > 0) {
        const latest = uniSessions[0];
        setCurrentSessionId(latest.id);
        setMessages(latest.messages);
      } else {
        setCurrentSessionId(null);
        setMessages([{
          id: generateId(),
          text: currentUniversity.welcomeMessage,
          sender: Sender.AI,
          timestamp: new Date()
        }]);
      }
      setActiveTab('chat'); // Reset to chat tab on university change
    }
  }, [selectedUniId, sessions, currentUniversity]);

  // Default welcome message if empty
  useEffect(() => {
    if (messages.length === 0 && !currentSessionId) {
      setMessages([
        {
          id: generateId(),
          text: currentUniversity.welcomeMessage,
          sender: Sender.AI,
          timestamp: new Date()
        }
      ]);
    }
  }, [currentUniversity, messages.length, currentSessionId]);

  // Scroll to bottom
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, activeTab]);

  // Notification timer
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleNewChat = () => {
    setCurrentSessionId(null);
    setMessages([{
      id: generateId(),
      text: currentUniversity.welcomeMessage,
      sender: Sender.AI,
      timestamp: new Date()
    }]);
    setIsHistoryOpen(false);
    setActiveTab('chat');
  };

  const handleLoadSession = (session: ChatSession) => {
    setCurrentSessionId(session.id);
    setMessages(session.messages);
    setSelectedUniId(session.universityId);
    prevUniIdRef.current = session.universityId;
    setIsHistoryOpen(false);
    setActiveTab('chat');
  };

  const handleDeleteSession = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      await deleteChatSession(id);
      const newSessions = sessions.filter(s => s.id !== id);
      setSessions(newSessions);
      if (currentSessionId === id) {
        handleNewChat();
      }
    } catch (error) {
      console.error("Failed to delete session", error);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessageText = input;
    setInput('');

    // 1. Optimistic UI update for user message
    const tempUserMsgId = generateId();
    const newUserMessage: Message = {
      id: tempUserMsgId,
      text: userMessageText,
      sender: Sender.USER,
      timestamp: new Date()
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    let activeSessionId = currentSessionId;

    try {
      // 2. Ensure session exists or create one
      let currentSession: ChatSession | null = null;

      if (!activeSessionId) {
        const newSession = await createChatSession(
          currentUniversity.id,
          userMessageText.slice(0, 30) + (userMessageText.length > 30 ? '...' : '')
        );

        if (newSession) {
          activeSessionId = newSession.id;
          setCurrentSessionId(activeSessionId);
          currentSession = { ...newSession, messages: [] };
          // Add to local state
          setSessions(prev => [currentSession!, ...prev]);
        }
      }

      // 3. Persist user message to backend
      if (activeSessionId) {
        await addMessage(activeSessionId, userMessageText, Sender.USER);
      }

      // 4. Process Stats
      const { newBadges, leveledUp } = await processUserInteraction(userMessageText);
      // Reload stats to get fresh state including XP
      const freshStats = await getUserStats();
      setUserStats(freshStats);

      if (newBadges.length > 0) {
        setNotification({
          type: 'achievement',
          text: `Unlocked: ${newBadges[0].name}!`
        });
      }

      // 5. Generate AI Response
      const userContext = await generateUserContextSummary();

      const { text, mapLocation } = await generateResponse(
        currentUniversity.id,
        currentUniversity.personaName,
        currentUniversity.styleGuide,
        userContext,
        userMessageText,
        messages,
        activeSessionId || 'temp-id'
      );

      // 6. Persist AI message to backend
      let savedAiMessage: Message | null = null;
      if (activeSessionId) {
        savedAiMessage = await addMessage(activeSessionId, text, Sender.AI);
      }

      const newAiMessage: Message = {
        id: savedAiMessage?.id || generateId(),
        text: text,
        sender: Sender.AI,
        timestamp: new Date(),
        mapLocation: mapLocation
      };

      const finalMessages = [...updatedMessages, newAiMessage];
      setMessages(finalMessages);

      // Update session in list to show latest state/time
      if (activeSessionId) {
        setSessions(prev => prev.map(s => s.id === activeSessionId ? {
          ...s,
          messages: finalMessages,
          lastModified: Date.now(),
          universityId: currentUniversity.id
        } : s).sort((a, b) => b.lastModified - a.lastModified));
      }

    } catch (error) {
      console.error("Error in message flow", error);
      setNotification({
        type: 'error',
        text: "Failed to send message. Please try again."
      });
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    "Where can I study late?",
    "Where is the library?",
    "Is there free Wi-Fi?",
    "List food spots.",
  ];

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const filteredSessions = sessions.filter(s => s.universityId === selectedUniId);

  if (authLoading) {
    return <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>;
  }

  if (!isLoggedIn) {
    return <AuthScreen onAuthSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen overflow-hidden relative bg-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Aurora Background */}
      <Aurora
        colorStops={currentUniversity.auroraColors}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        universities={UNIVERSITIES}
        selectedUniId={selectedUniId}
        onSelectUni={setSelectedUniId}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sessions={filteredSessions}
        currentSessionId={currentSessionId}
        onNewChat={handleNewChat}
        onLoadSession={handleLoadSession}
        onDeleteSession={handleDeleteSession}
        onLogout={() => {
          logout().catch(err => {
            console.error('Logout error:', err);
            setIsLoggedIn(false);
            window.location.reload();
          });
        }}
        userEmail={userEmail}
        currentUniversity={currentUniversity}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        
        {notification && (
          <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg z-50 animate-in slide-in-from-top-5 fade-in flex items-center gap-2 font-bold ${notification.type === 'achievement' ? 'bg-yellow-500/90 text-white' :
            notification.type === 'error' ? 'bg-red-500/90 text-white' :
              'bg-green-600/90 text-white'
            }`}>
            {notification.type === 'achievement' ? <Star className="fill-current" size={18} /> :
              notification.type === 'error' ? <Info size={18} /> :
                <Check size={18} />}
            {notification.text}
          </div>
        )}

        {/* Top Bar with Stats */}
        <header className="flex-none p-4 z-20 bg-gradient-to-b from-black/40 to-transparent">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {!isSidebarOpen && (
                <div className="flex items-center gap-2">
                  <img 
                    src={currentUniversity.logoPath} 
                    alt={currentUniversity.shortName}
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="text-lg font-bold text-white">UniPilot</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="p-2 rounded-md transition-all text-white/60 hover:text-white hover:bg-white/10"
                title="About"
              >
                <Info size={18} />
              </button>
              <button
                onClick={() => setIsStatsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-md transition-colors"
              >
                <Trophy size={16} className="text-yellow-400" />
                <span className="text-sm font-semibold text-white">Lvl {userStats.level}</span>
              </button>
            </div>
          </div>
        </header>

        <main
          className="flex-1 overflow-y-auto relative scrollbar-hide z-10"
          onClick={() => { setIsDropdownOpen(false); setIsHistoryOpen(false); }}
        >
          <div className="max-w-3xl mx-auto px-4 py-4 pb-4">

          {activeTab === 'chat' && (
            <>
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} university={currentUniversity} />
              ))}

              {isLoading && (
                <div className="flex w-full justify-start mb-6 animate-pulse">
                  <div className="flex flex-row items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-${currentUniversity.themeColor} flex items-center justify-center text-white opacity-50`}>
                      <span className="text-sm">{currentUniversity.logoEmoji}</span>
                    </div>
                    <div className="bg-white border border-gray-100 px-5 py-4 rounded-2xl rounded-tl-none shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}

          {activeTab === 'events' && (
            <EventsTab events={currentCampusData.events} university={currentUniversity} />
          )}

          {activeTab === 'multifaith' && (
            <MultiFaithTab spaces={currentCampusData.multiFaithSpaces} university={currentUniversity} />
          )}

          {activeTab === 'faq' && (
            <FaqTab faq={currentCampusData.faq} university={currentUniversity} />
          )}

        </div>
      </main>

      {activeTab === 'chat' && (
        <footer className="flex-none p-4 bg-gradient-to-t from-black/40 to-transparent z-20 animate-in slide-in-from-bottom-2">
          <div className="max-w-3xl mx-auto">
            {/* Always show suggested prompts */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setInput(prompt)}
                  className="whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-md transition-colors bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 shadow-lg"
                >
                  {prompt}
                </button>
              ))}
            </div>


            <div className="relative flex items-center gap-2">
              <button
                onClick={() => setInput('')}
                title="Clear Input"
                className="p-3 rounded-md transition-colors text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20"
              >
                <Trash2 size={20} />
              </button>

              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask ${currentUniversity.personaName} a question...`}
                  className="w-full pl-5 pr-14 py-3 border border-white/30 focus:ring-0 focus:border-white/50 rounded-md shadow-lg transition-all bg-white/15 backdrop-blur-xl text-white placeholder-white/50 font-medium"
                  disabled={isLoading}
                />
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className={`p-2 rounded-md transition-all transform active:scale-95 shadow-lg ${input.trim() && !isLoading
                      ? 'bg-white/90 text-black hover:bg-white'
                      : 'bg-white/20 text-white/40 cursor-not-allowed backdrop-blur-md'
                      }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-white/60 font-medium">Powered by Google Gemini. Information may vary.</p>
            </div>
          </div>
        </footer>
      )}

      </div> {/* End Main Content Area */}

      <GamificationPanel
        stats={userStats}
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
};

export default App;
