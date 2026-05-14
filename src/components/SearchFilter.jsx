import React from 'react'
import '../styles/search-filter.css'


function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button 
            className="clear-button"
            onClick={() => onSearchChange('')}
          >
            X
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchFilter
