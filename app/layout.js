import './globals.css'

export const metadata = {
  title: 'Markus Mornings',
  description: 'Systems thinking. Photography. Craft. Clarity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-container">
            <a href="/markus-mornings/" className="nav-brand">
              Markus Mornings
            </a>
            <ul className="nav-links">
              <li><a href="/markus-mornings/">Home</a></li>
              <li><a href="/markus-mornings/archive">Archive</a></li>
              <li><a href="/markus-mornings/about">About</a></li>
            </ul>
          </div>
        </nav>
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
        <footer className="footer">
          <p>© 2025 Markus Corvus. Thinking out loud.</p>
        </footer>
      </body>
    </html>
  )
}
