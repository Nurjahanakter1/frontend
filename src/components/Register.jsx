import React, { useState } from 'react'

export default function Register({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', role: 'user' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const base = import.meta.env.VITE_API_BASE_URL || ''
      const res = await fetch(`${base}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      setMessage({ type: 'success', text: data.message || 'Registered' })
      // optional: navigate to login after successful register
      setTimeout(() => onNavigate('login'), 1200)
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Register</h2>
      {message && (
        <div className={`mt-4 p-3 rounded ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select name="role" value={form.role} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50">{loading ? 'Creating…' : 'Create account'}</button>
          <button type="button" onClick={() => onNavigate('login')} className="text-sm text-indigo-600">Have an account?</button>
        </div>
      </form>
    </section>
  )
}
