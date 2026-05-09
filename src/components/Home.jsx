import React from 'react'

export default function Home({ onNavigate }) {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold text-gray-900">Parmicy Management</h1>
              <p className="mt-4 text-gray-600">Centralize permission management, simplify access control, and improve security for your apps and teams.</p>
              <div className="mt-8 flex gap-3">
                <button onClick={() => onNavigate('register')} className="px-6 py-3 bg-indigo-600 text-white rounded-lg">Get Started</button>
                <button onClick={() => onNavigate('contact')} className="px-6 py-3 bg-transparent border border-gray-300 rounded-lg">Contact Sales</button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex items-center justify-center">
              <div className="w-full max-w-md bg-indigo-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-indigo-700">Live demo</h3>
                <p className="text-gray-600 mt-2">A quick preview of user roles and permissions.</p>
                <div className="mt-6 bg-white rounded-md p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Admin</div>
                      <div className="text-xs text-gray-500">Full access</div>
                    </div>
                    <div className="text-green-600 font-semibold">Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900">Why choose Parmicy?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Simple</h3>
              <p className="text-sm text-gray-600 mt-2">Easy UI and quick onboarding.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-gray-600 mt-2">Role-based controls and audit logs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Scalable</h3>
              <p className="text-sm text-gray-600 mt-2">Works for small teams to enterprises.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
