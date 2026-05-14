import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/not-found.css'


function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>¡Oh no! Página no encontrada</h2>
        <p>Parece que Rick ha viajado a una dimensión equivocada y llevó esta página con él.</p>
        
        <div className="error-illustration">
          <span>O</span>
        </div>

        <Link to="/" className="back-home-button">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
