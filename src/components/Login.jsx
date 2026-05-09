import React from 'react'

export default function Login({ onNavigate }) {
  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in</button>
          <button type="button" onClick={() => onNavigate('register')} className="text-sm text-indigo-600">Create account</button>
        </div>
      </form>
    </section>
  )
}
