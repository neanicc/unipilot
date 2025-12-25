# 🎓 UniPilot

**UniPilot** is an interactive, AI-powered companion designed to help university students navigate campus life. Whether you're a freshman lost on your first day or a senior looking for the best study spot, UniPilot connects you with a university-specific AI persona to guide you.

![UniPilot Banner](https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop)

## ✨ Features

-   **🤖 Context-Aware AI Chat**: Chat with specialized personas (e.g., "Davis Guide" for Waterloo, "Marauder Mentor" for McMaster) driven by **Google Gemini 2.0 Flash**.
-   **📍 Interactive Campus Maps**: Ask about a building, and UniPilot will not only describe it but also display its location on an interactive map.
-   **🏆 Gamification**: Earn XP, level up, and unlock badges (like "Night Owl" or "Campus Explorer") as you interact with the app.
-   **📅 Event Summaries**: Get AI-generated weekly briefings of campus events tailored to your vibe.
-   **🕌 Multi-Faith Spaces**: Dedicated finder for prayer and meditation spaces on campus.
-   **🔐 Seamless Auth**: Users can save their chat history and progress across devices via **Supabase**.

## 🛠️ Tech Stack

-   **Frontend**: React 19, Vite, TypeScript
-   **AI Engine**: Google Gemini API (`@google/generative-ai`)
-   **Database & Auth**: Supabase
-   **Styling**: TailwindCSS, Lucide React
-   **Maps**: Leaflet

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   A Google Gemini API Key
-   A Supabase Project

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/unipilot.git
    cd unipilot
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory:
    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the application**
    ```bash
    npm run dev
    ```

## 🏗️ Architecture

UniPilot works primarily as a **Client-Side** application.
-   **`services/geminiService.ts`**: Handles all AI logic, including persona injection, tool calling (maps), and rate limiting.
-   **`services/statsService.ts`**: Manages the gamification logic (XP calculation, badges) and syncs with Supabase.
-   **`components/`**: Contains modular UI inputs like `MessageBubble`, `GamificationPanel`, and `MapComponent`.

## 🛡️ Rate Limiting & Stability

The app includes a built-in **Client-Side Rate Limiter** to prevent hitting Google's API quotas (429 Errors). It automatically throttles requests and retries failed calls with exponential backoff.

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
