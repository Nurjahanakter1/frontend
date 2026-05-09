import React from 'react'

export default function HowItWorks() {
  const steps = [
    { title: 'Connect', desc: 'Integrate your apps and identity providers.' },
    { title: 'Define', desc: 'Create roles and map permissions.' },
    { title: 'Enforce', desc: 'Apply rules and monitor access.' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-indigo-50 rounded-lg">
      <h2 className="text-2xl font-bold">How it works</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <div key={s.title} className="p-6 bg-white rounded-lg shadow">
            <div className="text-sm font-semibold text-indigo-600">Step {idx + 1}</div>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
