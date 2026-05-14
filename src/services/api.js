const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/character?page=${page}`);
    if (!response.ok) throw new Error('Error al obtener personajes');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const searchCharactersByName = async (name, page = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/character?name=${name}&page=${page}`);
    if (!response.ok) throw new Error('No se encontraron personajes');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const fetchCharactersBySpecies = async (species, page = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/character?species=${species}&page=${page}`);
    if (!response.ok) throw new Error('No se encontraron personajes de esa especie');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) throw new Error('Personaje no encontrado');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
