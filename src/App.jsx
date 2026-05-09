import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={setPage} />
      case 'services':
        return <Services />
      case 'how':
        return <HowItWorks />
      case 'contact':
        return <Contact />
      case 'faq':
        return <FAQ />
      case 'login':
        return <Login onNavigate={setPage} />
      case 'register':
        return <Register onNavigate={setPage} />
      default:
        return <Home onNavigate={setPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setPage} />
      <div className="flex-grow">{renderPage()}</div>
      <Footer />
    </div>
  )
}

export default App
