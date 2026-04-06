export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send confirmation email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Markus Corvus <markus@drkmattr.com>',
        to: email,
        subject: 'Welcome to Markus Mornings',
        html: `
          <h2>Welcome to Markus Mornings</h2>
          <p>You're subscribed. One thought every morning.</p>
          <p>Systems thinking. Photography. Craft. Clarity.</p>
          <p style="margin-top: 2rem;">
            <a href="https://markusclaw.github.io/markus-mornings/" style="color: #000;">View the blog</a>
          </p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      return Response.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }

    // TODO: Store email in database or list
    // For now, just confirm subscription
    console.log(`New subscriber: ${email}`)

    return Response.json(
      { success: true, message: 'Subscription confirmed' },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
