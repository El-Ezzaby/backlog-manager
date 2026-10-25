interface Game {
  id: number
  title: string
  platform: string
  status: string
}

interface GameCardProps {
  game: Game
  onDelete: (id: number) => void
  onUpdateStatus: (id: number, status: string) => void
}

export default function GameCard({ game, onDelete, onUpdateStatus }: GameCardProps) {
  return (
    <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{game.title}</h2>
          <button onClick={() => onDelete(game.id)} className="text-red-400 hover:text-red-300 text-sm">
            ✕ Remove
          </button>
        </div>
        <div className="text-sm text-gray-400 space-y-1 mb-4">
          <p>Platform: <span className="text-white font-medium">{game.platform}</span></p>
          <p>Status: <span className="text-indigo-400 font-medium">{game.status}</span></p>
        </div>
      </div>

      {/* Status Quick-Change Buttons */}
<div className="flex gap-2 pt-3 border-t border-gray-800 text-xs">
  <span className="text-gray-500 self-center">Move to:</span>
  {['Backlog', 'Playing', 'Beaten', 'Dropped'].map((st) => (
    game.status !== st && (
      <button
        key={st}
        onClick={() => onUpdateStatus(game.id, st)}
        className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-300 transition"
      >
        {st}
      </button>
    )
  ))}
</div>
    </div>
  )
}