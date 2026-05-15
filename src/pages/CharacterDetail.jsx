import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchCharacterById } from '../services/api'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/character-detail.css'

function CharacterDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchCharacterById(id)
        setCharacter(data)
      } catch (err) {
        setError('No se pudo cargar la descripción del personaje. Intenta de nuevo.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadCharacter()
    }
  }, [id])

  return (
    <div className="character-detail-page">
      <div className="character-detail-card">
        <div className="detail-header">
          <h1>Descripción del personaje</h1>
          <Link to="/" className="back-button">
            Volver a Inicio
          </Link>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : character ? (
          <div className="detail-grid">
            <div className="detail-image-wrapper">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="detail-info">
              <h2>{character.name}</h2>
              <div className="detail-meta">
                <p className="detail-item">
                  <span className="detail-label">Estado</span>
                  <span className={`status-badge ${character.status.toLowerCase()}`}>
                    {character.status}
                  </span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Especie</span>
                  <span className="detail-value">{character.species}</span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Género</span>
                  <span className="detail-value">{character.gender}</span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Origen</span>
                  <span className="detail-value">{character.origin?.name || 'Desconocido'}</span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Ubicación</span>
                  <span className="detail-value">{character.location?.name || 'Desconocida'}</span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Tipo</span>
                  <span className="detail-value">{character.type || 'No aplica'}</span>
                </p>
                <p className="detail-item">
                  <span className="detail-label">Episodios</span>
                  <span className="detail-value">{character.episode?.length || 0}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ErrorMessage message="Personaje no encontrado." />
        )}
      </div>
    </div>
  )
}

export default CharacterDetail
