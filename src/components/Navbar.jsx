import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'


function Navbar({ statusFilter, onStatusChange, onReset }) {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleSpeciesClick = (species) => {
    navigate(`/species/${species}`)
    setIsDropdownOpen(false)
    setIsStatusDropdownOpen(false)
  }

  const handleStatusClick = (status) => {
    onStatusChange(status)
    setIsStatusDropdownOpen(false)
    setIsDropdownOpen(false)
  }

  const handleReset = () => {
    onReset()
    setIsDropdownOpen(false)
    setIsStatusDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
    setIsStatusDropdownOpen(false)
    setIsMobileOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Rick and Morty
        </Link>

        <button
          className={`hamburger ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeDropdown}>
              Inicio
            </Link>
          </li>

          <li className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Filtrar por Especie ▼
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <button 
                onClick={() => handleSpeciesClick('Human')}
                className="dropdown-item"
              >
                Humanos
              </button>
              <button 
                onClick={() => handleSpeciesClick('Alien')}
                className="dropdown-item"
              >
                Aliens
              </button>
              <button 
                onClick={() => handleSpeciesClick('Robot')}
                className="dropdown-item"
              >
                Robots
              </button>
              <button 
                onClick={() => handleSpeciesClick('Cronenberg')}
                className="dropdown-item"
              >
                Cronenbergs
              </button>
              <button 
                onClick={() => handleSpeciesClick('Disease')}
                className="dropdown-item"
              >
                Enfermedades
              </button>
            </div>
          </li>

          <li className={`nav-item dropdown status-dropdown ${isStatusDropdownOpen ? 'active' : ''}`}>
            <button className="nav-link dropdown-toggle" onClick={toggleStatusDropdown}>
              {statusFilter ? (statusFilter === 'alive' ? 'Vivo' : statusFilter === 'dead' ? 'Muerto' : 'Desconocido') : 'Filtrar por Estado ▼'}
            </button>
            <div className={`dropdown-menu ${isStatusDropdownOpen ? 'show' : ''}`}>
              <button
                onClick={() => handleStatusClick('')}
                className="dropdown-item"
              >
                Todos los estados
              </button>
              <button
                onClick={() => handleStatusClick('alive')}
                className="dropdown-item"
              >
                Vivo
              </button>
              <button
                onClick={() => handleStatusClick('dead')}
                className="dropdown-item"
              >
                Muerto
              </button>
              <button
                onClick={() => handleStatusClick('unknown')}
                className="dropdown-item"
              >
                Desconocido
              </button>
            </div>
          </li>
          <li className="nav-item">
            <button className="nav-link reset-button" onClick={handleReset}>
              Reiniciar filtros
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
