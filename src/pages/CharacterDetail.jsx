import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchCharacterById, fetchEpisodesByIds } from '../services/api'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/character-detail.css'

function CharacterDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [showEpisodesModal, setShowEpisodesModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const modalRef = useRef(null)

  const openEpisodesModal = () => {
    const cardElement = document.querySelector('.character-detail-card')
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => setShowEpisodesModal(true), 220)
    } else {
      setShowEpisodesModal(true)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const loadCharacter = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchCharacterById(id)
        setCharacter(data)

        if (data?.episode?.length) {
          const episodeIds = data.episode.map((url) => url.split('/').pop()).join(',')
          const episodeData = await fetchEpisodesByIds(episodeIds)
          setEpisodes(episodeData)
        } else {
          setEpisodes([])
        }
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

  useEffect(() => {
    if (showEpisodesModal && modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showEpisodesModal])

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

              {episodes.length > 0 && (
                <div className="episode-summary-inline">
                  <span className="episode-summary">Ver lista completa de episodios</span>
                  <button
                    type="button"
                    className="episode-toggle"
                    onClick={openEpisodesModal}
                  >
                    Ver todos
                  </button>

                  {showEpisodesModal && (
                    <div className="episode-modal-overlay">
                      <div className="episode-modal">
                        <div className="episode-modal-header">
                          <div>
                            <h3>Episodios</h3>
                            <p>{episodes.length} capítulos disponibles</p>
                          </div>
                          <button
                            type="button"
                            className="modal-close"
                            onClick={() => setShowEpisodesModal(false)}
                          >
                            Cerrar
                          </button>
                        </div>

                        <div ref={modalRef} className="episode-modal-grid">
                          {episodes.map((episode) => (
                            <span key={episode.id} className="episode-chip episode-chip-modal">
                              <strong>{episode.episode}</strong>
                              {episode.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
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
