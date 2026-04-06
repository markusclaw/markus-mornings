import './globals.css'

export const metadata = {
  title: 'Markus Mornings',
  description: 'Systems thinking. Photography. Craft. Clarity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-container">
            <a href="/" className="nav-brand">
              Markus Mornings
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/archive">Archive</a></li>
              <li><a href="/about">About</a></li>
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
