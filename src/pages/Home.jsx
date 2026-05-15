import React, { useState, useEffect } from 'react'
import { fetchCharacters, searchCharacters } from '../services/api'
import CharacterList from '../components/CharacterList'
import SearchFilter from '../components/SearchFilter'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import '../styles/home.css'


function Home({ searchTerm, setSearchTerm, statusFilter }) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [info, setInfo] = useState(null)

  
  useEffect(() => {
    loadCharacters()
  }, [])

  
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter])

  
  useEffect(() => {
    if (searchTerm.trim() || statusFilter) {
      searchCharactersQuery()
    } else {
      loadCharacters()
    }
  }, [currentPage, searchTerm, statusFilter])

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

  const searchCharactersQuery = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await searchCharacters(searchTerm, statusFilter, currentPage)
      setCharacters(data.results)
      setInfo(data.info)
      setTotalPages(data.info.pages)
    } catch (err) {
      setError('No se encontraron personajes con esos filtros.')
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
