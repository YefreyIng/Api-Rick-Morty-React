/**
 * Servicio para consumir la API de Rick and Morty
 */

const API_BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Obtiene todos los personajes con paginación
 * @param {number} page - Número de página
 * @returns {Promise} Datos de personajes
 */
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

/**
 * Busca personajes por nombre
 * @param {string} name - Nombre del personaje
 * @param {number} page - Número de página
 * @returns {Promise} Datos de personajes filtrados
 */
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

/**
 * Obtiene personajes filtrados por especie
 * @param {string} species - Especie del personaje
 * @param {number} page - Número de página
 * @returns {Promise} Datos de personajes filtrados
 */
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

/**
 * Obtiene un personaje por ID
 * @param {number} id - ID del personaje
 * @returns {Promise} Datos del personaje
 */
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
