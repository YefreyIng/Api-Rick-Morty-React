import React from 'react'
import CharacterCard from './CharacterCard'
import '../styles/character-list.css'


function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters && characters.length > 0 ? (
        characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p className="no-characters">No se encontraron personajes</p>
      )}
    </div>
  )
}

export default CharacterList
