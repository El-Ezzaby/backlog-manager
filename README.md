# 🎮 Video Game Backlog Manager

A clean, responsive full-stack web application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Designed to help gamers keep track of their backlog, organize games by platform, update playing status, and filter their library seamlessly.

## 🚀 Features

* **Full CRUD Operations**: Create, read, update, and delete games in your backlog.

* **Status Tracking**: Categorize games by status (`Backlog`, `Playing`, `Beaten`, or `Dropped`).

* **Quick Status Updates**: Seamlessly transition game statuses directly from each card.

* **Dynamic Filtering**: Filter your view by specific status categories or view all games at once.

* **Modular Architecture**: Built with reusable React components and Next.js App Router API endpoints.

* **TypeScript & Tailwind CSS**: Type-safe logic combined with a modern dark-mode user interface.

## 🛠️ Tech Stack

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)

* **Library**: [React 19](https://react.dev/)

* **Language**: [TypeScript](https://www.typescriptlang.org/)

* **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── games/
│   │       ├── route.ts          # GET (all/filtered) & POST handlers
│   │       └── [id]/
│   │           └── route.ts      # PUT (update) & DELETE handlers
│   ├── page.tsx                  # Main client-side page & state orchestrator
│   ├── layout.tsx                # App layout wrapper
│   └── globals.css               # Global CSS styles & Tailwind directives
├── components/
│   ├── GameCard.tsx              # Component rendering individual game items
│   ├── GameForm.tsx              # Input form for adding new games
│   └── FilterTabs.tsx            # Navigation buttons for status filtering
└── README.md                     # Project documentation

```

## 🚦 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/El-Ezzaby/backlog-manager.git
   cd backlog-manager
   
   ```

2. **Install dependencies**:

   ```
   npm install
   
   ```

3. **Run the development server**:

   ```
   npm run dev
   
   ```

4. **Open in browser**:
   Navigate to <http://localhost:3000> to view the application.

## 🔌 API Endpoints

| Method | Endpoint | Description | 
| ----- | ----- | ----- | 
| `GET` | `/api/games` | Fetch all games (supports `?status=...` query parameter) | 
| `POST` | `/api/games` | Add a new game to the backlog | 
| `PUT` | `/api/games/[id]` | Update a game's status or metadata | 
| `DELETE` | `/api/games/[id]` | Delete a game from the backlog | 

## 📝 Code Overview & Design Choices

* **Modular Components**: Split into self-contained components (`GameCard`, `GameForm`, `FilterTabs`) to adhere to DRY principles and maintain clear separation of concerns.

* **Lightweight State Management**: Utilizes React's `useState` and `useEffect` hooks on the main page component to orchestrate data fetching and client-side UI updates.

* **RESTful API Handler Pattern**: Server handlers manage data updates cleanly with clear JSON response structures (`{ success: true, data: ... }`).