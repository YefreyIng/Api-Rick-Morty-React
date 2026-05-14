import React, { useState, useEffect } from 'react'
import { fetchCharacters, searchCharactersByName } from '../services/api'
import CharacterList from '../components/CharacterList'
import SearchFilter from '../components/SearchFilter'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/home.css'

/**
 * Página principal que muestra todos los personajes con búsqueda y paginación
 */
function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [info, setInfo] = useState(null)

  // Carga inicial de personajes
  useEffect(() => {
    loadCharacters()
  }, [])

  // Efecto para búsqueda
  useEffect(() => {
    if (searchTerm.trim()) {
      searchCharacters()
    } else {
      setCurrentPage(1)
      loadCharacters()
    }
  }, [searchTerm])

  // Efecto para cambio de página
  useEffect(() => {
    if (searchTerm.trim()) {
      searchCharacters()
    } else {
      loadCharacters()
    }
  }, [currentPage])

  const loadCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCharacters(currentPage)
      setCharacters(data.results)
      setInfo(data.info)
      setTotalPages(data.info.pages)
    } catch (err) {
      setError('No se pudo cargar los personajes. Intenta más tarde.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const searchCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await searchCharactersByName(searchTerm, currentPage)
      setCharacters(data.results)
      setInfo(data.info)
      setTotalPages(data.info.pages)
    } catch (err) {
      setError('No se encontraron personajes con ese nombre.')
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

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Personajes de Rick and Morty</h1>
        <p>Explora todos los personajes de la serie</p>
      </div>

      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

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

export default Home
