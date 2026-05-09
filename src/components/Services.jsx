import React from 'react'

export default function Services() {
  const services = [
    { title: 'Role Management', desc: 'Create and manage roles quickly.' },
    { title: 'Permission Audits', desc: 'Track permission changes and events.' },
    { title: 'Integrations', desc: 'Connect to your auth and apps.' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
