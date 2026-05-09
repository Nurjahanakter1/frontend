import React from 'react'

export default function Navbar({ onNavigate }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">Pharmacy</div>
            <div className="hidden md:flex ml-10 space-x-4">
              <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-indigo-600">Home</button>
              <button onClick={() => onNavigate('services')} className="text-gray-700 hover:text-indigo-600">Services</button>
              <button onClick={() => onNavigate('how')} className="text-gray-700 hover:text-indigo-600">How it works</button>
              <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-indigo-600">Contact</button>
              <button onClick={() => onNavigate('faq')} className="text-gray-700 hover:text-indigo-600">FAQ</button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => onNavigate('login')} className="px-4 py-2 bg-transparent border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">Login</button>
            <button onClick={() => onNavigate('register')} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
