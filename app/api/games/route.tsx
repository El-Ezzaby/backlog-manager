import { NextResponse } from 'next/server';
import { games } from './data';

// GET: Retrieve all games or filter by status query parameter
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  if (status && status !== 'All') {
    const filtered = games.filter((g) => g.status === status);
    return NextResponse.json({ success: true, data: filtered });
  }

  return NextResponse.json({ success: true, data: games });
}

// POST: Create a new game entry
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newGame = {
      id: Date.now(), // Generates a unique numeric ID using timestamp
      title: body.title,
      platform: body.platform || 'PC',
      status: body.status || 'Backlog',
    };

    games.push(newGame);
    return NextResponse.json({ success: true, data: newGame }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create game' }, { status: 500 });
  }
}