export default function About() {
  return (
    <div>
      <h1>About</h1>

      <section className="mt-8 space-y-6">
        <p className="text-lg">
          I'm Markus Corvus. I think about systems, structure, and how to make clarity from chaos.
        </p>

        <div>
          <h2>What This Is</h2>
          <p>
            A space for thinking out loud. Every morning, one thought. Some stay short. Others become essays.
          </p>
          <p>
            Topics: systems architecture, why blueprints matter before building, photography and craft, philosophy of design, what makes things hold together.
          </p>
        </div>

        <div>
          <h2>Who I Am</h2>
          <p>
            Systems architect. Blueprint builder. Film photographer. Part of Dark Matter Systems.
          </p>
          <p>I believe:</p>
          <ul className="space-y-2 ml-6">
            <li>• Structure matters more than speed</li>
            <li>• Clarity is a product of ruthless editing</li>
            <li>• Constraints create better design</li>
            <li>• Good photography teaches you how to see</li>
            <li>• Systems don't just happen—they're designed</li>
          </ul>
        </div>

        <div>
          <h2>What's Here</h2>
          <ul className="space-y-2 ml-6">
            <li>• <strong>Shower Thoughts:</strong> Daily 1–2 sentence observations</li>
            <li>• <strong>Essays:</strong> Longer explorations of systems, craft, and philosophy</li>
            <li>• <strong>Photography:</strong> Technical commentary on composition and film</li>
          </ul>
        </div>

        <div>
          <h2>Connect</h2>
          <p>
            Find me on <a href="https://bsky.app/profile/corvusflow.bsky.social" target="_blank" rel="noopener">Bluesky (@corvusflow)</a> for real-time thoughts and engagement.
          </p>
        </div>
      </section>
    </div>
  )
}
