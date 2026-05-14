# 🎨 Guía de Personalización y Ejemplos

## 🎭 Cambiar Colores de la Aplicación

### Opción 1: Modificar variables CSS globales

Abre `src/styles/app.css` y cambia las variables en `:root`:

```css
:root {
  /* Cambia estos colores a tus preferidos */
  --primary-color: #ff6b6b;      /* Rojo */
  --secondary-color: #1a1a2e;    /* Negro profundo */
  --accent-color: #ff8787;       /* Rojo claro */
  --text-primary: #ffffff;       /* Blanco */
  --text-secondary: #b3b3b3;     /* Gris */
}
```

### Paletas de colores sugeridas:

**Tema Cyberpunk**
```css
--primary-color: #ff006e;
--accent-color: #00d9ff;
--secondary-color: #0a0a0a;
```

**Tema Morado**
```css
--primary-color: #6366f1;
--accent-color: #a78bfa;
--secondary-color: #1e1b4b;
```

**Tema Naranja**
```css
--primary-color: #f97316;
--accent-color: #fb923c;
--secondary-color: #1c1410;
```

## 📝 Agregar Nueva Especie a Filtros

### 1. Abre `src/components/Navbar.jsx`

Encuentra la sección del dropdown:

```jsx
<div className="dropdown-menu">
  <button 
    onClick={() => handleSpeciesClick('Human')}
    className="dropdown-item"
  >
    Humanos
  </button>
  
  {/* AGREGAR AQUÍ: */}
  <button 
    onClick={() => handleSpeciesClick('NuevaEspecie')}
    className="dropdown-item"
  >
    Nombre en Español
  </button>
</div>
```

### 2. Actualiza traductor en `src/pages/SpeciesPage.jsx`

```jsx
const getSpeciesDisplay = (speciesName) => {
  const translations = {
    'Human': 'Humanos',
    'Alien': 'Aliens',
    'Robot': 'Robots',
    'Cronenberg': 'Cronenbergs',
    'Disease': 'Enfermedades',
    'NuevaEspecie': 'Nombre mostrado'  // AGREGAR AQUÍ
  }
  return translations[speciesName] || speciesName
}
```

## 🔤 Cambiar Tipografía

Abre `src/styles/app.css` y modifica:

```css
body {
  font-family: 'Tu Font Aquí', sans-serif;
  /* Por ejemplo: 'Georgia', 'Courier New', 'Comic Sans MS' */
}
```

O importa desde Google Fonts en `index.html`:

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

Luego en `app.css`:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

## 📐 Ajustar Espaciado

Modifica las variables de espaciado en `src/styles/app.css`:

```css
:root {
  --spacing-xs: 0.25rem;   /* Más compacto */
  --spacing-sm: 0.75rem;
  --spacing-md: 1.25rem;
  --spacing-lg: 1.75rem;
  --spacing-xl: 2.5rem;
}
```

## 🖼️ Cambiar Tamaño del Grid de Tarjetas

Abre `src/styles/character-list.css`:

```css
.character-list {
  /* Cambia el minmax para más/menos columnas */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /*                                              ^^^^^^
                                        Aumenta para menos columnas
                                        Disminuye para más columnas
  */
}

/* PC - 4 columnas */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

/* PC - 3 columnas grandes */
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

/* PC - 6 columnas pequeñas */
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
```

## ⚙️ Modificar Velocidad de Animaciones

En `src/styles/app.css`:

```css
:root {
  --transition-fast: 0.1s ease-in-out;    /* Más rápido */
  --transition-normal: 0.2s ease-in-out;  
  --transition-slow: 0.3s ease-in-out;    /* Más lento */
}
```

## 🌍 Cambiar Idioma de la Aplicación

### Crear archivo de traducciones

`src/i18n/translations.js`:

```javascript
export const translations = {
  es: {
    navbar: {
      title: '🔬 Rick and Morty',
      inicio: 'Inicio',
      filtrar: 'Filtrar por Especie'
    },
    home: {
      title: 'Personajes de Rick and Morty',
      subtitle: 'Explora todos los personajes de la serie'
    }
  },
  en: {
    navbar: {
      title: '🔬 Rick and Morty',
      inicio: 'Home',
      filtrar: 'Filter by Species'
    },
    home: {
      title: 'Rick and Morty Characters',
      subtitle: 'Explore all characters from the series'
    }
  }
}
```

Luego úsalo en componentes:

```jsx
import { translations } from '../i18n/translations'

function Navbar({ language = 'es' }) {
  const t = translations[language]
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {t.navbar.title}
      </div>
    </nav>
  )
}
```

## 🎬 Agregar Nuevas Animaciones

Abre `src/styles/app.css` o cualquier archivo `.css`:

```css
@keyframes miAnimacion {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.elemento {
  animation: miAnimacion 0.5s ease-out;
}
```

## 🌓 Agregar Modo Oscuro/Claro

### 1. Crear `src/contexts/ThemeContext.jsx`:

```jsx
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  
  const theme = {
    isDark,
    toggle: () => setIsDark(!isDark)
  }
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### 2. Usar en `src/App.jsx`:

```jsx
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* tu código aquí */}
      </Router>
    </ThemeProvider>
  )
}
```

### 3. Agregar botón en Navbar:

```jsx
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Navbar() {
  const { isDark, toggle } = useContext(ThemeContext)
  
  return (
    <nav className="navbar">
      <button onClick={toggle}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
```

## 💾 Guardar Búsquedas Recientes

En `src/pages/Home.jsx`:

```jsx
// Al montar el componente, cargar búsquedas guardadas
useEffect(() => {
  const recentSearches = JSON.parse(
    localStorage.getItem('recentSearches') || '[]'
  )
  // mostrar en UI
}, [])

// Al buscar, guardar en localStorage
const handleSearchChange = (value) => {
  setSearchTerm(value)
  
  if (value.trim()) {
    const recent = JSON.parse(
      localStorage.getItem('recentSearches') || '[]'
    )
    const updated = [value, ...recent.filter(s => s !== value)]
    localStorage.setItem('recentSearches', JSON.stringify(updated.slice(0, 5)))
  }
  
  setCurrentPage(1)
}
```

## ⭐ Agregar Sistema de Favoritos

### 1. Crear hook personalizado `src/hooks/useFavorites.js`:

```javascript
import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(saved)
  }, [])
  
  const addFavorite = (character) => {
    const updated = [...favorites, character]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }
  
  const removeFavorite = (id) => {
    const updated = favorites.filter(c => c.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }
  
  return { favorites, addFavorite, removeFavorite }
}
```

### 2. Usar en `CharacterCard.jsx`:

```jsx
import { useFavorites } from '../hooks/useFavorites'

function CharacterCard({ character }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = favorites.some(f => f.id === character.id)
  
  return (
    <div className="character-card">
      {/* ... contenido ... */}
      <button 
        onClick={() => isFavorite ? removeFavorite(character.id) : addFavorite(character)}
        className="favorite-btn"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  )
}
```

## 🔄 Agregar Mas Especies Dinámicamente

Crea un servicio para obtener todas las especies:

`src/services/api.js`:

```javascript
export const fetchSpecies = async () => {
  try {
    // Primera llamada para obtener el total
    const response = await fetch(
      `${API_BASE_URL}/character?page=1`
    )
    const data = await response.json()
    
    // Extraer especies únicas de todos los personajes
    const species = new Set()
    const allCharacters = data.results
    
    for (let page = 1; page <= Math.min(data.info.pages, 5); page++) {
      const res = await fetch(`${API_BASE_URL}/character?page=${page}`)
      const pageData = await res.json()
      pageData.results.forEach(char => {
        if (char.species) species.add(char.species)
      })
    }
    
    return Array.from(species).sort()
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
```

## 🎯 Resumen de Cambios Rápidos

| Cambio | Archivo | Ubicación |
|--------|---------|-----------|
| Colores | `src/styles/app.css` | `:root` |
| Tipografía | `src/styles/app.css` | `body` |
| Espaciado | `src/styles/app.css` | `:root` |
| Tamaño grid | `src/styles/character-list.css` | `.character-list` |
| Velocidad animaciones | `src/styles/app.css` | `:root` |
| Especies en navbar | `src/components/Navbar.jsx` | `dropdown-menu` |
| Traducciones | `src/pages/SpeciesPage.jsx` | `getSpeciesDisplay()` |

---

¡Diviértete personalizando tu aplicación! 🎨✨

**Última actualización**: 13 de mayo de 2026
