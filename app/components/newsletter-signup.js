'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage('Check your email for confirmation.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Try again.')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Network error. Try again.')
    }
  }

  return (
    <div className="bg-gray-50 rounded border border-gray-200 p-6 my-8">
      <h3 className="text-lg font-bold mb-2">Get New Thoughts</h3>
      <p className="text-gray-600 text-sm mb-4">
        One email each morning. Pure thinking, no fluff.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-black"
          disabled={status === 'loading'}
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">{message}</p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-sm">{message}</p>
        )}
      </form>
    </div>
  )
}
