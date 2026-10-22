import { NextResponse } from 'next/server';

// Mock database of games
const games = [
  { id: 1, title: 'Elden Ring', platform: 'PC', status: 'Playing', hoursPlayed: 45, rating: 5 },
  { id: 2, title: 'Hades', platform: 'Switch', status: 'Beaten', hoursPlayed: 35, rating: 5 },
  { id: 3, title: 'Cyberpunk 2077', platform: 'PC', status: 'Backlog', hoursPlayed: 0, rating: 0 },
  { id: 4, title: 'God of War Ragnarök', platform: 'PS5', status: 'Dropped', hoursPlayed: 5, rating: 3 }
];

// 1. GET: Fetch all games (supports optional ?status= filtering)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  if (status) {
    const filtered = games.filter(g => g.status.toLowerCase() === status.toLowerCase());
    return NextResponse.json({ success: true, count: filtered.length, data: filtered });
  }

  return NextResponse.json({ success: true, count: games.length, data: games });
}

// 2. POST: Add a new game
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, platform, status, hoursPlayed, rating } = body;

    if (!title) {
      return NextResponse.json(
        { success: false, message: 'Game title is required' },
        { status: 400 }
      );
    }

    const newGame = {
      id: games.length > 0 ? Math.max(...games.map(g => g.id)) + 1 : 1,
      title,
      platform: platform || 'PC',
      status: status || 'Backlog',
      hoursPlayed: hoursPlayed ? Number(hoursPlayed) : 0,
      rating: rating ? Number(rating) : 0
    };

    games.push(newGame);
    return NextResponse.json({ success: true, data: newGame }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON payload' },
      { status: 400 }
    );
  }
}