import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharactersBySpecies } from '../services/api'
import CharacterList from '../components/CharacterList'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/species-page.css'


function SpeciesPage() {
  const { species } = useParams()
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [info, setInfo] = useState(null)

  
  useEffect(() => {
    loadCharactersBySpecies()
  }, [species])

  
  useEffect(() => {
    loadCharactersBySpecies()
  }, [currentPage])

  const loadCharactersBySpecies = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCharactersBySpecies(species, currentPage)
      setCharacters(data.results)
      setInfo(data.info)
      setTotalPages(data.info.pages)
    } catch (err) {
      setError(`No se encontraron personajes de la especie: ${species}`)
      setCharacters([])
      setTotalPages(1)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSpeciesDisplay = (speciesName) => {
    const translations = {
      'Human': 'Humanos',
      'Alien': 'Aliens',
      'Robot': 'Robots',
      'Cronenberg': 'Cronenbergs',
      'Disease': 'Enfermedades'
    }
    return translations[speciesName] || speciesName
  }

  return (
    <div className="species-page">
      <div className="species-header">
        <h1>Personajes: {getSpeciesDisplay(species)}</h1>
        <p>Explora todos los personajes de la especie seleccionada</p>
      </div>

      {error && <ErrorMessage message={error} />}

      {loading ? (
        <Loader />
      ) : (
        <>
          {info && (
            <div className="results-info">
              Total de personajes: <strong>{info.count}</strong>
            </div>
          )}
          <CharacterList characters={characters} />
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  )
}

export default SpeciesPage
