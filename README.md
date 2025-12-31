<p align="center">
  <img src="public/logos/uw.png" alt="UniPilot Logo" width="80" height="80" />
</p>

<h1 align="center">🎓 UniPilot</h1>

<p align="center">
  <strong>Your AI-powered campus companion for Canadian universities</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/Supabase-Auth_&_DB-3FCF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Vercel-Serverless-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🌟 What Makes UniPilot Different?

Unlike generic AI assistants, **UniPilot is purpose-built for university students**:

| Generic GPT Wrappers | UniPilot |
|---------------------|----------|
| Generic responses from training data | **93KB+ of curated campus data** per university |
| No context about your campus | **University-specific personas** with unique personalities |
| Text-only responses | **Interactive maps** that show exact building locations |
| No user progress tracking | **Gamification system** with XP, levels, and badges |
| No structured data | **Real FAQs, events, multi-faith spaces, and resources** |

---

## ✨ Features

### 💬 Chat Assistant
The core experience — a conversational AI that knows your campus inside-out.

**University-Specific Personas:**
Each university has a distinct AI personality trained on campus-specific data:
- **Davis Guide** (Waterloo) — Witty, tech-savvy, makes geese jokes
- **Hart House Helper** (U of T) — Formal, sophisticated, college-aware
- **Marauder Mentor** (McMaster) — High-energy, supportive, nature-focused
- **Mustang Guide** (Western) — Spirited, proud, Purple Pride
- **Gaels Guardian** (Queen's) — Traditional, warm, "Cha Gheill!"
- **Downtown Guide** (TMU) — Urban, fast-paced, city-savvy
- More universities & colleges to come soon!

**Smart Responses:**
- Targets **150-300 words** per response (not too short, not overwhelming)
- Boldfaces **key locations** and important terms
- Formats with bullet points and clear structure
- Links to in-app tabs when relevant

**Interactive Map Integration:**
Ask "Where is the library?" and get:
- A detailed text response with hours and tips
- An **embedded Leaflet map** pinpointing the exact location
- Nearby landmarks for reference

---

### 📅 Campus Events
A dedicated tab showing upcoming campus events with intelligent summarization.

- **Curated Event Data** — Workshops, socials, wellness events, and more
- **AI-Generated Weekly Briefing** — The AI persona summarizes the "vibe" of the week
- **Category Filtering** — Academic, Social, Wellness, Career, etc.
- **Rich Event Cards** — Date, time, location, and full description

---

### 🕌 Multi-Faith Spaces
A searchable directory of prayer rooms, meditation spaces, and religious facilities for each campus.

- **Comprehensive Listings** — Muslim prayer rooms, chapel spaces, meditation rooms, chaplaincy offices
- **Detailed Information** — Location, hours, capacity, amenities (wudu facilities, prayer mats, etc.)
- **Accessibility Info** — Wheelchair access, gender-specific spaces

---

### ❓ FAQ
Quick answers to the most common campus questions without needing to chat.

- **Pre-answered Questions** — "Where can I print?", "How do I book a study room?", "Where is the gym?"
- **University-Specific** — Each campus has its own FAQ set with relevant answers
- **Searchable** — Filter through questions quickly

---

### 🗺️ Campus Map
Full interactive map of the entire campus.

- **Leaflet-Powered** — Smooth panning, zooming, and marker clustering
- **Navigation Integration** — Navigate through campus

---

### 🏆 Gamification System
Keep students engaged with progress tracking and achievements.

- **XP & Levels** — Earn 10 XP per message, level up every 100 XP
- **Progress Bar** — Visual indicator of progress to next level
- **Unlockable Badges:**
  - 👋 *Orientation Week* — Ask your first question
  - 🦉 *Night Owl* — Chat after 10 PM
  - 🗺️ *Campus Explorer* — Ask about 3+ topics
  - 🤓 *Keener* — Reach Level 5
- **Badge Bonus** — 50 XP reward for unlocking each badge

---

### � Persistent Chat History
Never lose a conversation — all chats sync to the cloud.

- **Supabase-Backed** — Chat sessions and messages stored in PostgreSQL
- **Cross-Device Sync** — Start on laptop, continue on phone
- **Session Management** — Create new chats, load previous ones, delete old sessions
- **Auto-Save** — Every message automatically persisted

---

### 🐛 Report a Problem
Built-in feedback system for users to report issues or request features.

- **Formspree Integration** — No backend needed, emails go directly to you
- **Collapsible UI** — Lives in the sidebar, expands when needed
- **Pre-filled Email** — User's email auto-populated from their account
- **Success Feedback** — Confirmation message after submission

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with latest features |
| **TypeScript 5.8** | Type-safe development |
| **Vite 6** | Lightning-fast dev server and bundler |
| **Lucide React** | Beautiful icon library |
| **Leaflet** | Interactive campus maps |
| **OGL** | WebGL aurora background effects |

### Backend & AI
| Technology | Purpose |
|------------|---------|
| **Google Gemini 2.5 Flash** | LLM for chat and event summaries |
| **Vercel Serverless Functions** | API routes for secure AI calls |
| **Supabase** | PostgreSQL database + Auth |
| **Formspree** | Contact form handling |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| **Vercel** | Hosting and serverless deployment |
| **GitHub** | Version control |

---

## 🏗️ Architecture

```
unipilot/
├── api/                          # Vercel Serverless Functions
│   ├── chat.ts                   # Main AI chat endpoint
│   └── events-summary.ts         # Event summary generation
├── components/                   # React UI Components
│   ├── AuthScreen.tsx            # Login/signup flow
│   ├── Sidebar.tsx               # Navigation + chat history
│   ├── MapComponent.tsx          # Leaflet map integration
│   ├── GamificationPanel.tsx     # XP, levels, badges display
│   ├── EventsTab.tsx             # Campus events with AI summary
│   ├── MultiFaithTab.tsx         # Prayer/meditation spaces
│   ├── FaqTab.tsx                # Frequently asked questions
│   ├── CampusMapTab.tsx          # Full campus map view
│   ├── ReportProblemForm.tsx     # Formspree contact form
│   └── ...                       # Other UI components
├── services/                     # Business Logic
│   ├── geminiService.ts          # AI orchestration + rate limiting
│   ├── chatService.ts            # Chat CRUD operations
│   ├── statsService.ts           # Gamification logic
│   ├── authService.ts            # Authentication helpers
│   ├── campusData.ts             # 93KB of curated campus data
│   ├── supabaseClient.ts         # Database client
│   └── apiService.ts             # API call wrappers
├── contexts/                     # React Contexts
│   └── ThemeContext.tsx          # Theme management
├── App.tsx                       # Main application component
├── constants.ts                  # University profiles & badges
├── types.ts                      # TypeScript interfaces
└── vercel.json                   # Vercel configuration
```

### Data Flow

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Frontend  │────▶│  Vercel API      │────▶│  Gemini AI  │
│   (React)   │◀────│  (/api/chat)     │◀────│  (2.5 Flash)│
└─────────────┘     └──────────────────┘     └─────────────┘
       │                    │
       │                    ▼
       │            ┌──────────────────┐
       └───────────▶│    Supabase      │
                    │  (Auth + Data)   │
                    └──────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API Key ([Get one here](https://aistudio.google.com/))
- Supabase Project ([Create one here](https://supabase.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/neanicc/unipilot.git
cd unipilot

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Gemini AI (for local development)
VITE_GEMINI_API_KEY=your-gemini-api-key

# Formspree (contact form)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Supabase Setup

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Users stats table
CREATE TABLE user_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  experience_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  total_messages INTEGER DEFAULT 0,
  badges_unlocked JSONB DEFAULT '[]',
  topics_explored TEXT[] DEFAULT '{}',
  last_message_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat sessions table
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  university_id TEXT NOT NULL,
  title TEXT DEFAULT 'Untitled Chat',
  last_modified TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  sender TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only access their own data)
CREATE POLICY "Users can CRUD their own stats" ON user_stats
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can CRUD their own sessions" ON chat_sessions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can CRUD messages in their sessions" ON messages
  FOR ALL USING (
    session_id IN (SELECT id FROM chat_sessions WHERE user_id = auth.uid())
  );
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel auto-detects Vite configuration

3. **Set Environment Variables** in Vercel Dashboard:
   ```
   GEMINI_API_KEY=your-gemini-api-key
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

   > ⚠️ **Note**: The serverless functions use `GEMINI_API_KEY` (no VITE_ prefix) while the frontend uses `VITE_GEMINI_API_KEY`.

4. **Deploy** — Vercel handles the rest!

---

## 🔒 Security

- **API keys never exposed to client** — Gemini calls go through Vercel serverless functions
- **Row Level Security (RLS)** — Users can only access their own data in Supabase
- **JWT Authentication** — Secure session management via Supabase Auth

---

## 📊 Rate Limiting

The app includes **built-in rate limiting** for Gemini API:
- Client-side throttling (6 requests/minute for free tier)
- Exponential backoff retry (3 attempts with 1s → 2s → 4s delays)
- Graceful error handling with user-friendly messages

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👥 Authors

- **[@abrj7](https://github.com/abrj7)** — Abdullah Rajput
- **[@neanicc](https://github.com/neanicc)** — Ali Imran

*Software Engineering students @ University of Waterloo*

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ for Canadian university students
</p>
