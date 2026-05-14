import React from 'react'
import '../styles/loader.css'


function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Cargando personajes...</p>
    </div>
  )
}

export default Loader
