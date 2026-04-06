export default function Archive() {
  const allThoughts = [
    { date: 'January 27, 2025', title: 'Systems Don\'t Just Happen', category: 'systems' },
    { date: 'January 27, 2025', title: 'Chaos and Structure', category: 'systems' }
  ]

  return (
    <div>
      <h1>Archive</h1>
      <p className="text-gray-600 mb-8">All thoughts, chronologically.</p>

      <ul className="space-y-2">
        {allThoughts.map((thought, idx) => (
          <li key={idx} className="flex gap-4 pb-2 border-b border-gray-200 last:border-b-0">
            <span className="text-gray-500 font-mono text-xs shrink-0 pt-1">{thought.date}</span>
            <span className="flex-1">
              {thought.title}
              <span className="post-category">{thought.category}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
