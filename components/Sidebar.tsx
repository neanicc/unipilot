import React from 'react';
import { 
  Plus, 
  MessageSquare, 
  Calendar, 
  Heart, 
  ChevronLeft, 
  ChevronRight,
  Trash2,
  LogOut,
  ChevronDown,
  HelpCircle,
  PanelLeftOpen,
  PanelLeftClose
} from 'lucide-react';
import { UniversityProfile, ChatSession } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  universities: UniversityProfile[];
  selectedUniId: string;
  onSelectUni: (id: string) => void;
  activeTab: 'chat' | 'events' | 'multifaith' | 'faq';
  setActiveTab: (tab: 'chat' | 'events' | 'multifaith' | 'faq') => void;
  sessions: ChatSession[];
  currentSessionId: string | null;
  onNewChat: () => void;
  onLoadSession: (session: ChatSession) => void;
  onDeleteSession: (e: React.MouseEvent, sessionId: string) => void;
  onLogout: () => void;
  userEmail: string;
  currentUniversity: UniversityProfile;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  universities,
  selectedUniId,
  onSelectUni,
  activeTab,
  setActiveTab,
  sessions,
  currentSessionId,
  onNewChat,
  onLoadSession,
  onDeleteSession,
  onLogout,
  userEmail,
  currentUniversity
}) => {
  const [isUniDropdownOpen, setIsUniDropdownOpen] = React.useState(false);
  const selectedUni = universities.find(u => u.id === selectedUniId) || universities[0];

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get user display name from email
  const userName = userEmail?.split('@')[0] || 'User';

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-black/80 backdrop-blur-xl border-r border-white/10 z-30 transition-all duration-300 flex flex-col ${
        isOpen ? 'w-64' : 'w-16'
      }`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Header - Logo & Collapse Button */}
      <div className={`p-3 border-b border-white/10 ${isOpen ? '' : 'flex justify-center'}`}>
        {isOpen ? (
          <>
            {/* Expanded: Logo Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img 
                  src={currentUniversity.logoPath} 
                  alt={currentUniversity.shortName}
                  className="w-8 h-8 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="text-lg font-bold text-white">UniPilot</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Collapse sidebar"
              >
                <PanelLeftClose size={18} />
              </button>
            </div>

            {/* University Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUniDropdownOpen(!isUniDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img 
                    src={selectedUni.logoPath} 
                    alt={selectedUni.shortName}
                    className="w-5 h-5 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="text-sm font-medium text-white">{selectedUni.shortName}</span>
                </div>
                <ChevronDown size={14} className={`text-white/60 transition-transform ${isUniDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isUniDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 backdrop-blur-xl rounded-md border border-white/20 overflow-hidden z-50">
                  {universities.map(uni => (
                    <button
                      key={uni.id}
                      onClick={() => {
                        onSelectUni(uni.id);
                        setIsUniDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                        selectedUniId === uni.id ? 'bg-white/15' : ''
                      }`}
                    >
                      <img 
                        src={uni.logoPath} 
                        alt={uni.shortName}
                        className="w-5 h-5 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <span className="text-sm text-white">{uni.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Collapsed: Just logo with expand button */
          <div className="flex flex-col items-center gap-2">
            <img 
              src={currentUniversity.logoPath} 
              alt={currentUniversity.shortName}
              className="w-8 h-8 object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <button 
              onClick={() => setIsOpen(true)}
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="Expand sidebar"
            >
              <PanelLeftOpen size={18} />
            </button>
          </div>
        )}
      </div>

      {/* New Chat Button */}
      <div className={`p-2 ${isOpen ? '' : 'flex justify-center'}`}>
        <button
          onClick={onNewChat}
          className={`flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-white font-medium text-sm ${
            isOpen ? 'w-full px-3 py-2.5' : 'p-2.5'
          }`}
          title="New Chat"
        >
          <Plus size={16} />
          {isOpen && 'New Chat'}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className={`px-2 pb-2 ${isOpen ? '' : 'flex flex-col items-center'}`}>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${
            isOpen ? 'w-full px-3 py-2' : 'p-2.5 mb-1'
          } ${
            activeTab === 'chat' 
              ? 'bg-white/15 text-white' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
          title="Chat Assistant"
        >
          <MessageSquare size={16} />
          {isOpen && 'Chat Assistant'}
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${
            isOpen ? 'w-full px-3 py-2' : 'p-2.5 mb-1'
          } ${
            activeTab === 'events' 
              ? 'bg-white/15 text-white' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
          title="Campus Events"
        >
          <Calendar size={16} />
          {isOpen && 'Campus Events'}
        </button>
        <button
          onClick={() => setActiveTab('multifaith')}
          className={`flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${
            isOpen ? 'w-full px-3 py-2' : 'p-2.5 mb-1'
          } ${
            activeTab === 'multifaith' 
              ? 'bg-white/15 text-white' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
          title="Multi-Faith Spaces"
        >
          <Heart size={16} />
          {isOpen && 'Multi-Faith Spaces'}
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`flex items-center gap-2 rounded-md text-sm font-medium transition-colors ${
            isOpen ? 'w-full px-3 py-2' : 'p-2.5'
          } ${
            activeTab === 'faq' 
              ? 'bg-white/15 text-white' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
          title="FAQ"
        >
          <HelpCircle size={16} />
          {isOpen && 'FAQ'}
        </button>
      </div>

      {/* Divider */}
      <div className="mx-2 border-t border-white/10"></div>

      {/* Chat History - Only show when expanded */}
      {isOpen && (
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2 px-1">Chat History</p>
          {sessions.length === 0 ? (
            <p className="text-xs text-white/30 px-1 italic">No chat history yet</p>
          ) : (
            sessions.map(session => (
              <div
                key={session.id}
                onClick={() => onLoadSession(session)}
                className={`group flex items-center justify-between px-2 py-2 rounded-md cursor-pointer transition-colors mb-1 ${
                  currentSessionId === session.id 
                    ? 'bg-white/15' 
                    : 'hover:bg-white/10'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{session.title || 'Untitled Chat'}</p>
                  <p className="text-[10px] text-white/40">{formatDate(session.lastModified)}</p>
                </div>
                <button
                  onClick={(e) => onDeleteSession(e, session.id)}
                  className="p-1 text-white/30 hover:text-red-400 hover:bg-red-500/20 rounded opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Spacer when collapsed */}
      {!isOpen && <div className="flex-1"></div>}

      {/* User Profile at Bottom */}
      <div className={`p-2 border-t border-white/10 ${isOpen ? '' : 'flex justify-center'}`}>
        {isOpen ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">{userName}</p>
                <p className="text-[10px] text-white/50 truncate">{currentUniversity.shortName}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          /* Collapsed: Just user initial */
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={onLogout}
              className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold text-sm hover:bg-purple-500 transition-colors"
              title={`${userName} - Click to logout`}
            >
              {userName.charAt(0).toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
