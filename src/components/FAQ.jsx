import React, { useState } from 'react'

const items = [
  { q: 'What is Pharmacy?', a: 'Pharmacy is a permission management system for apps and teams.' },
  { q: 'Can I integrate with my auth provider?', a: 'Yes — you can connect common identity providers.' },
  { q: 'Is there an audit log?', a: 'Yes, changes and events are recorded for auditing.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="mt-6 space-y-3">
        {items.map((it, i) => (
          <div key={i} className="border rounded-md">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-4 flex justify-between items-center">
              <span className="font-medium">{it.q}</span>
              <span className="text-gray-500">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <div className="p-4 pt-0 text-gray-600">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
