import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

/**
 * Componente Navbar con navegación principal
 */
function Navbar() {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSpeciesClick = (species) => {
    navigate(`/species/${species}`)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🔬 Rick and Morty
        </Link>

        <ul className="nav-menu">
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
