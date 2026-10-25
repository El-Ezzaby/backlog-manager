import { NextResponse } from 'next/server';
import { games } from '../data';

// DELETE: Remove a game from the shared array by ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const index = games.findIndex((g) => g.id === id);

  if (index === -1) {
    return NextResponse.json({ success: false, error: 'Game not found' }, { status: 404 });
  }

  // Mutate the shared array to permanently remove the item
  games.splice(index, 1);

  return NextResponse.json({ success: true, message: 'Game deleted successfully' });
}

// PUT: Update an existing game's status or details
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const body = await request.json();
    const game = games.find((g) => g.id === id);

    if (!game) {
      return NextResponse.json({ success: false, error: 'Game not found' }, { status: 404 });
    }

    if (body.status) game.status = body.status;
    if (body.title) game.title = body.title;
    if (body.platform) game.platform = body.platform;

    return NextResponse.json({ success: true, data: game });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update game' }, { status: 500 });
  }
}