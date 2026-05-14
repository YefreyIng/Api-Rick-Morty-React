import React from 'react'
import '../styles/error-message.css'

/**
 * Componente de mensaje de error
 * @param {string} message - Mensaje de error
 */
function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">⚠️</span>
        <p>{message || 'Ocurrió un error al cargar los datos'}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
