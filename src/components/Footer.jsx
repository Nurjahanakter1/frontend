import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="text-lg font-bold text-indigo-600">Parmicy</div>
            <p className="text-sm mt-1">Managing permissions simply and securely.</p>
          </div>
          <div className="mt-6 md:mt-0 text-sm">
            <div>Contact: support@parmicy.example</div>
            <div className="mt-1">© {new Date().getFullYear()} Parmicy</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
