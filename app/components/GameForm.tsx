// Props for the GameForm component that handle inputs and submitions
interface GameFormProps{
  newTitle: string
  setNewTitle: (title: string) => void
  newPlatform: string
  setNewPlatform: (platform: string) => void
  onSubmit: (e: React.FormEvent) => void
}

//GameForm renders input field, platform selection and new game addition
export default function GameForm({
  newTitle,
  setNewTitle,
  newPlatform,
  setNewPlatform,
  onSubmit,
}: GameFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-gray-900 p-4 rounded-lg mb-6 flex gap-4">
      {/* Input field */}
      <input 
        type="text"
        placeholder="Game title..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="bg-gray-800 px-4 py-2 rounded flex-1 border border-gray-700 focus:outline-none focus:border-indigo-500"
      />

      {/* Drop down menu (platform selection) */}
      <select 
        value={newPlatform}
        onChange={(e) => setNewPlatform(e.target.value)}
        className="bg-gray-800 px-4 py-2 rounded border border-gray-700"
      >
        <option value="PC">PC</option>
        <option value="Switch">Switch</option>
        <option value="PS5">PS5</option>
        <option value="Xbox">Xbox</option>
      </select>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded font-medium transition"
      >
        Add Game
      </button>
    </form>
  )
}