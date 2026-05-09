import React from 'react'

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="mt-2 text-gray-600">Send us a message and we'll get back to you.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="4" />
        </div>
        <div>
          <button type="button" className="px-5 py-2 bg-indigo-600 text-white rounded">Send</button>
        </div>
      </form>
    </section>
  )
}
