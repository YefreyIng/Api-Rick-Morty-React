import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SpeciesPage from './pages/SpeciesPage'
import NotFound from './pages/NotFound'
import './styles/app.css'


function App() {
  useEffect(() => {
    let frameId = null

    const handleMouseMove = (event) => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 100
        const y = (event.clientY / window.innerHeight) * 100
        document.documentElement.style.setProperty('--bg-x', `${x}%`)
        document.documentElement.style.setProperty('--bg-y', `${y}%`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/species/:species" element={<SpeciesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
