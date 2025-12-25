import React, { useState, useEffect, useRef } from 'react';
import { UNIVERSITIES, DEFAULT_UNIVERSITY_ID, USE_BACKEND, INITIAL_BADGES } from './constants';
import { Message, Sender, UserStats, ChatSession, CampusEvent } from './types';
import { generateResponse } from './services/geminiService';
import { getUserStats, processUserInteraction, generateUserContextSummary } from './services/statsService';
import { getChatSessions, createChatSession, addMessage, deleteChatSession } from './services/chatService';
import { isAuthenticated, logout, getUserProfile } from './services/authService';
import { DATA_UW, DATA_UOFT, DATA_MAC, DATA_WESTERN, DATA_QUEENS, DATA_TMU } from './services/campusData';
import UniversitySelector from './components/UniversitySelector';
import MessageBubble from './components/MessageBubble';
import GamificationPanel from './components/GamificationPanel';
import AboutModal from './components/AboutModal';
import EventsTab from './components/EventsTab';
import MultiFaithTab from './components/MultiFaithTab';
import AuthScreen from './components/AuthScreen';
import { Send, GraduationCap, Info, Trash2, Trophy, Check, Star, MessageSquare, Calendar, History, Plus, ChevronDown, Heart, LogOut } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'chat' | 'events' | 'multifaith'>('chat');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
    "Contact the registrar",
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
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden relative">

      {notification && (
        <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 animate-in slide-in-from-top-5 fade-in flex items-center gap-2 font-bold transition-colors ${notification.type === 'achievement' ? 'bg-yellow-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
            'bg-green-600 text-white'
          }`}>
          {notification.type === 'achievement' ? <Star className="fill-current" size={18} /> :
            notification.type === 'error' ? <Info size={18} /> :
              <Check size={18} />}
          {notification.text}
        </div>
      )}

      <header className="flex-none bg-white border-b border-gray-200 pt-4 pb-2 px-4 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 md:gap-4">
            <div className={`bg-${currentUniversity.themeColor} p-2 rounded-lg text-white hidden md:block`}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">UniPilot</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Interactive AI for {currentUniversity.shortName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full p-1 relative">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-white rounded-full transition-all"
                title="About"
              >
                <Info size={18} />
              </button>

              <div className="w-px h-4 bg-gray-300 mx-0.5"></div>

              <div className="relative">
                <button
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all ${isHistoryOpen ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-800 hover:bg-white'
                    }`}
                  title="Chat History"
                >
                  <History size={18} />
                  <span className="text-xs font-medium hidden sm:block">History</span>
                  <ChevronDown size={12} />
                </button>

                {isHistoryOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2 border-b border-gray-50">
                      <button
                        onClick={handleNewChat}
                        className="w-full flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <Plus size={16} />
                        New Chat
                      </button>
                    </div>
                    <div className="max-h-64 overflow-y-auto py-1">
                      {filteredSessions.length === 0 ? (
                        <div className="px-4 py-8 text-center text-gray-400 text-xs">
                          <MessageSquare size={24} className="mx-auto mb-2 opacity-20" />
                          No saved history for {currentUniversity.shortName}.
                        </div>
                      ) : (
                        filteredSessions.map(session => (
                          <div
                            key={session.id}
                            onClick={() => handleLoadSession(session)}
                            className={`group flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors ${currentSessionId === session.id ? 'bg-blue-50 border-l-2 border-blue-500 pl-[10px]' : 'pl-3'}`}
                          >
                            <div className="overflow-hidden">
                              <p className={`text-sm font-medium truncate ${currentSessionId === session.id ? 'text-blue-700' : 'text-gray-700'}`}>
                                {session.title || "Untitled Chat"}
                              </p>
                              <p className="text-[10px] text-gray-400">{formatDate(session.lastModified)}</p>
                            </div>
                            <button
                              onClick={(e) => handleDeleteSession(e, session.id)}
                              className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsStatsOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Trophy size={16} className="text-yellow-600" />
              <span className="text-sm font-semibold text-gray-700">Lvl {userStats.level}</span>
            </button>

            <UniversitySelector
              universities={UNIVERSITIES}
              selectedId={selectedUniId}
              onSelect={setSelectedUniId}
              isOpen={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
            />

            <button
              onClick={() => {
                logout().catch(err => {
                  console.error('Logout error:', err);
                  // Force logout by clearing state and reloading
                  setIsLoggedIn(false);
                  window.location.reload();
                });
              }}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              title="Log Out"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex gap-6 px-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('chat')}
            className={`pb-2 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'chat'
              ? `border-${currentUniversity.themeColor} text-${currentUniversity.themeColor}`
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <MessageSquare size={16} />
            Chat Assistant
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-2 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'events'
              ? `border-${currentUniversity.themeColor} text-${currentUniversity.themeColor}`
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <Calendar size={16} />
            Campus Events
          </button>
          <button
            onClick={() => setActiveTab('multifaith')}
            className={`pb-2 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'multifaith'
              ? `border-${currentUniversity.themeColor} text-${currentUniversity.themeColor}`
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <Heart size={16} />
            Multi-Faith Spaces
          </button>
        </div>
      </header>

      <main
        className="flex-1 overflow-y-auto relative scrollbar-hide"
        onClick={() => { setIsDropdownOpen(false); setIsHistoryOpen(false); }}
      >
        <div className="max-w-3xl mx-auto px-4 py-8 pb-32">

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

        </div>
      </main>

      {activeTab === 'chat' && (
        <footer className="flex-none p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 absolute bottom-0 w-full z-20 animate-in slide-in-from-bottom-2">
          <div className="max-w-3xl mx-auto">
            {messages.length < 3 && (
              <div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-xs font-medium text-gray-600 rounded-full transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <div className="relative flex items-end gap-2">
              <button
                onClick={handleNewChat}
                title="Reset / New Chat"
                className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
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
                  className="w-full pl-5 pr-12 py-3.5 bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 rounded-2xl shadow-inner text-gray-800 placeholder-gray-500 transition-all"
                  disabled={isLoading}
                />
                <div className="absolute right-2 bottom-1.5">
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className={`p-2 rounded-xl transition-all transform active:scale-95 ${input.trim() && !isLoading
                      ? `bg-${currentUniversity.themeColor} text-white shadow-md hover:opacity-90`
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-gray-400">Powered by Google Gemini. Information may vary.</p>
            </div>
          </div>
        </footer>
      )}

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
