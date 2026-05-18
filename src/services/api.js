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


export const searchCharacters = async (name = '', status = '', page = 1) => {
  try {
    const params = new URLSearchParams();
    if (name.trim()) params.append('name', name);
    if (status) params.append('status', status.toLowerCase());
    params.append('page', page);

    const response = await fetch(`${API_BASE_URL}/character?${params.toString()}`);
    if (!response.ok) throw new Error('No se encontraron personajes');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const fetchCharactersBySpecies = async (species, status = '', page = 1) => {
  try {
    const params = new URLSearchParams();
    params.append('species', species);
    if (status) params.append('status', status.toLowerCase());
    params.append('page', page);

    const response = await fetch(`${API_BASE_URL}/character?${params.toString()}`);
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

export const fetchEpisodesByIds = async (ids) => {
  try {
    const response = await fetch(`${API_BASE_URL}/episode/${ids}`);
    if (!response.ok) throw new Error('Error al obtener episodios');
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
