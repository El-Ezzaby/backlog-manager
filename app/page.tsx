'use client';

import { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import GameForm from './components/GameForm';
import FilterTabs from './components/FilterTabs';

interface Game {
  id: number;
  title: string;
  platform: string;
  status: string;
}

export default function GameBacklogPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [newPlatform, setNewPlatform] = useState('PC');

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames(statusFilter = 'All') {
    try {
      const url = statusFilter === 'All' ? '/api/games' : `/api/games?status=${statusFilter}`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) setGames(json.data);
    } catch (error) {
      console.error('Failed to fetch games:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddGame(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const res = await fetch('/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, platform: newPlatform, status: 'Backlog' })
      });
      const json = await res.json();
      if (json.success) {
        setGames([...games, json.data]);
        setNewTitle('');
      }
    } catch (error) {
      console.error('Failed to add game:', error);
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/games/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) setGames(games.filter((g) => g.id !== id));
    } catch (error) {
      console.error('Failed to delete game:', error);
    }
  }

  async function handleUpdateStatus(id: number, newStatus: string) {
    try {
      const res = await fetch(`/api/games/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const json = await res.json();
      if (json.success) {
        setGames(games.map((g) => (g.id === id ? { ...g, status: newStatus } : g)));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  }

  if (loading) return <div className="p-8 text-white">Loading your backlog...</div>;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎮 Video Game Backlog Manager</h1>

      <GameForm
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newPlatform={newPlatform}
        setNewPlatform={setNewPlatform}
        onSubmit={handleAddGame}
      />

      <FilterTabs onFilter={fetchGames} />

      <div className="grid gap-4 md:grid-cols-2">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onDelete={handleDelete}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </main>
  );
}