export interface Game {
  id: number;
  title: string;
  platform: string;
  status: string;
}

// Shared master list of games
export const games: Game[] = [
  { id: 1, title: 'Hades', platform: 'PC', status: 'Playing' },
  { id: 2, title: 'Elden Ring', platform: 'PS5', status: 'Backlog' },
];