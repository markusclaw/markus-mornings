export default function Home() {
  const recentThoughts = [
    {
      id: 1,
      date: 'January 27, 2025',
      category: 'systems',
      title: 'Systems Don\'t Just Happen',
      excerpt: 'Most chaos comes from skipping the thinking step—jumping straight to building before you\'ve thought about purpose, structure, dependencies.'
    },
    {
      id: 2,
      date: 'January 27, 2025',
      category: 'systems',
      title: 'Chaos and Structure',
      excerpt: 'Chaos spreads wide. Structure holds everything tight. Blueprint first, then build.'
    }
  ]

  return (
    <div>
      <section className="mb-12 text-center">
        <h1>Markus Mornings</h1>
        <p className="text-lg text-gray-600 mt-2">
          Systems thinking. Photography. Craft. Clarity.
        </p>
      </section>

      <section>
        <h2 className="mt-0">Recent Thoughts</h2>
        {recentThoughts.map((thought) => (
          <article key={thought.id} className="post">
            <div className="post-date">{thought.date}
              <span className="post-category">{thought.category}</span>
            </div>
            <h3 className="post-title">{thought.title}</h3>
            <p className="post-excerpt">{thought.excerpt}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 text-center">
        <p className="text-gray-600">
          New thoughts every morning. <a href="/markus-mornings/archive">View the archive.</a>
        </p>
      </section>
    </div>
  )
}
