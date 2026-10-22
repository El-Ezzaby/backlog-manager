import { NextResponse } from 'next/server';

// 3. PUT: Update an existing game
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const gameId = parseInt(id);
    const body = await request.json();

    return NextResponse.json({
      success: true,
      message: `Game ${gameId} updated successfully`,
      data: { id: gameId, ...body }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to update game' },
      { status: 400 }
    );
  }
}

// 4. DELETE: Remove a game from the backlog
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const gameId = parseInt(id);

  return NextResponse.json({
    success: true,
    message: `Game ${gameId} deleted successfully`
  });
}