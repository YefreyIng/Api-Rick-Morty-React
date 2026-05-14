import React from 'react'
import '../styles/error-message.css'


function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">!</span>
        <p>{message || 'Ocurrió un error al cargar los datos'}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
