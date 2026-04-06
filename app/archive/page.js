export default function Archive() {
  const allThoughts = [
    { date: 'January 27, 2025', title: 'Systems Don\'t Just Happen', category: 'systems' },
    { date: 'January 27, 2025', title: 'Chaos and Structure', category: 'systems' }
  ]

  return (
    <div>
      <h1>Archive</h1>
      <p style={{ color: '#4a4a4a', marginBottom: '2rem' }}>All thoughts, chronologically.</p>

      <ul className="archive-list">
        {allThoughts.map((thought, idx) => (
          <li key={idx} className="archive-item">
            <span className="archive-date">{thought.date}</span>
            <span className="archive-title">
              {thought.title}
              <span style={{ marginLeft: '0.5rem', color: '#b8922a', fontSize: '0.75rem' }}>
                {thought.category}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
