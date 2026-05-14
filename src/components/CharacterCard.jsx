import React from 'react'
import '../styles/character-card.css'


function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <div className="card-image-container">
        <img 
          src={character.image} 
          alt={character.name}
          className="card-image"
        />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        
        <div className="card-info">
          <div className="info-item">
            <span className="info-label">Especie:</span>
            <span className="info-value">{character.species}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Estado:</span>
            <span className={`status ${character.status.toLowerCase()}`}>
              {character.status}
            </span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Género:</span>
            <span className="info-value">{character.gender}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Ubicación:</span>
            <span className="info-value">{character.location?.name || 'Desconocida'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
