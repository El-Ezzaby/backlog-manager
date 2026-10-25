interface FilterTabsProps {
  onFilter: (status: string) => void
}

export default function FilterTabs({onFilter}: FilterTabsProps) {
  const statuses = ['All', 'Backlog', 'Playing', 'Beaten', 'Dropped']

  return (
    <div className="flex gap-2 mb-6">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onFilter(status)}
          className="bg-gray-900 hover:bg-gray-800 px-4 py-1.5 rounded text-sm border border-gray-800 transition"
        >
          {status}
        </button>
      ))}
    </div>
  )
}

