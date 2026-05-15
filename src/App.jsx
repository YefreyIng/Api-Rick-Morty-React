import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SpeciesPage from './pages/SpeciesPage'
import CharacterDetail from './pages/CharacterDetail'
import NotFound from './pages/NotFound'
import './styles/app.css'


function InnerApp() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const navigate = useNavigate()

  const resetFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    navigate('/')
  }

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
    <>
      <Navbar
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        onReset={resetFilters}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              statusFilter={statusFilter}
            />
          }
        />
        <Route
          path="/species/:species"
          element={<SpeciesPage statusFilter={statusFilter} />}
        />
        <Route
          path="character/:id"
          element={<CharacterDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<InnerApp />} />
      </Routes>
    </Router>
  )
}

export default App
