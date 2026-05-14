# 🔧 Stack Técnico y Detalles Arquitectónicos

## 📦 Dependencias Instaladas

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5"
  }
}
```

## 🏗️ Arquitectura de la Aplicación

```
App (Router principal)
│
├── Navbar (Componente Global)
│   ├── Logo + Link Home
│   ├── Nav Menu
│   └── Dropdown (Especies)
│
└── Routes
    ├── / (Home)
    │   ├── SearchFilter
    │   ├── CharacterList
    │   │   └── CharacterCard (x20)
    │   ├── Pagination
    │   ├── Loader (estado carga)
    │   └── ErrorMessage (si hay error)
    │
    ├── /species/:species (SpeciesPage)
    │   ├── Encabezado dinámico
    │   ├── CharacterList
    │   ├── Pagination
    │   ├── Loader
    │   └── ErrorMessage
    │
    └── * (NotFound - 404)
```

## 🔄 Flujo de Datos

### Home Component
```
[Carga Inicial]
  ↓
fetchCharacters(page=1)
  ↓
[setCharacters, setInfo, setTotalPages]
  ↓
[Mostrar UI]
  ↓
[Usuario escribe en SearchFilter]
  ↓
searchCharactersByName(term)
  ↓
[Actualizar lista] o [Mostrar error]
  ↓
[Usuario cambia página]
  ↓
loadCharacters(page) / searchCharacters()
  ↓
[Scroll top suave]
```

### SpeciesPage Component
```
[URL cambia: /species/:species]
  ↓
fetchCharactersBySpecies(species, page=1)
  ↓
[setCharacters, setInfo, setTotalPages]
  ↓
[Mostrar personajes de esa especie]
  ↓
[Paginación funciona igual]
```

## 🎨 Sistema de Diseño (Design System)

### Variables CSS Globales (`:root`)

```css
/* Colores */
--primary-color: #1db954        /* Verde Spotify */
--secondary-color: #191414      /* Negro profundo */
--accent-color: #1ed760         /* Verde neón */
--text-primary: #ffffff         /* Texto principal */
--text-secondary: #b3b3b3       /* Texto secundario */
--border-color: #282828         /* Bordes */
--danger-color: #ff6b6b         /* Errores */
--success-color: #51cf66        /* Éxito */
--warning-color: #ffd93d        /* Advertencias */

/* Espaciado (escala de 8px) */
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)

/* Bordes */
--border-radius: 8px
--border-radius-lg: 12px

/* Sombras */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1)
--shadow-md: 0 4px 12px rgba(0,0,0,0.15)
--shadow-lg: 0 10px 30px rgba(0,0,0,0.3)

/* Transiciones */
--transition-fast: 0.2s ease-in-out
--transition-normal: 0.3s ease-in-out
--transition-slow: 0.5s ease-in-out
```

## 📱 Breakpoints Responsivos

```css
/* PC - Desktop */
@media (min-width: 1200px) {
  Grid: 4-5 columnas
}

/* Tablet */
@media (max-width: 1199px) and (min-width: 768px) {
  Grid: 2-3 columnas
}

/* Móvil */
@media (max-width: 767px) and (min-width: 480px) {
  Grid: 2 columnas
  Elementos más compactos
}

/* Móvil pequeño */
@media (max-width: 479px) {
  Grid: 2 columnas adaptadas
  Tipografía reducida
  Espaciado comprimido
}
```

## 🔌 API Endpoints Utilizados

### Obtener personajes con paginación
```javascript
GET https://rickandmortyapi.com/api/character?page={page}

Response:
{
  info: {
    count: 826,      // Total de personajes
    pages: 42,       // Total de páginas
    next: "url",     // Siguiente página
    prev: "url"      // Página anterior
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "Earth", url: "url" },
      location: { name: "Earth", url: "url" },
      image: "url",
      episode: ["url", ...],
      url: "url",
      created: "2017-11-04T18:48:46.250Z"
    },
    ...
  ]
}
```

### Buscar por nombre
```javascript
GET https://rickandmortyapi.com/api/character?name={name}&page={page}
```

### Filtrar por especie
```javascript
GET https://rickandmortyapi.com/api/character?species={species}&page={page}

Especies disponibles:
- Human
- Alien
- Robot
- Cronenberg
- Disease
- Potion
- Unknown
```

## 🎭 Componentes y Su Responsabilidad

### Componentes Presentacionales (Dumb)
- `CharacterCard` - Solo recibe props y renderiza
- `Loader` - Solo muestra spinner
- `ErrorMessage` - Solo muestra error
- `Pagination` - Solo presenta UI de paginación

### Componentes Contenedores (Smart)
- `Home` - Maneja lógica de búsqueda y paginación
- `SpeciesPage` - Maneja filtrado por especie
- `Navbar` - Maneja navegación global
- `CharacterList` - Itera y renderiza tarjetas

## 🔄 Hooks React Utilizados

### En Home.jsx
```javascript
useState()          // characters, loading, error, currentPage, totalPages, searchTerm, info
useEffect()         // Carga inicial, dependencias: [species], [currentPage]
```

### En SpeciesPage.jsx
```javascript
useState()          // characters, loading, error, currentPage, totalPages, info
useParams()         // Obtiene :species de la URL
useEffect()         // Carga inicial, dependencias: [species], [currentPage]
```

### En Navbar.jsx
```javascript
useNavigate()       // Navegar programáticamente a /species/:species
```

## 📊 Performance Optimizaciones

1. **Lazy Rendering**: CharacterList solo renderiza lo que ve
2. **Event Delegation**: Navbar usa delegación de eventos
3. **CSS Optimizado**: Variables CSS para evitar duplicación
4. **Transiciones Suaves**: GPU-accelerated con `transform`
5. **Eventos Debounced**: Búsqueda optimizada (React maneja esto automáticamente)

## 🎬 Animaciones Implementadas

```css
@keyframes spin              /* Spinner loader */
@keyframes pulse             /* Texto cargando */
@keyframes slideDown         /* Dropdown menu */
@keyframes slideInDown       /* Headers */
@keyframes slideInUp         /* 404 content */
@keyframes bounce            /* 404 título */
@keyframes float             /* 404 ilustración */
```

## 🔐 Seguridad

✅ **XSS Protection**: React escapa automáticamente el contenido
✅ **CORS**: API pública, sin issues de CORS
✅ **No sensible data**: No se almacena data sensible
✅ **Validación**: Validamos respuestas de API

## 📈 Escalabilidad

El proyecto puede extenderse fácilmente con:

1. **Más páginas**
   - Detalle de personaje
   - Episodios
   - Ubicaciones

2. **Más funcionalidades**
   - LocalStorage para favoritos
   - Filtros múltiples
   - Ordenamiento
   - Tema claro/oscuro

3. **Optimizaciones**
   - Code splitting con React.lazy
   - Caché de peticiones
   - Virtual scrolling
   - Progressive Web App

## 🧪 Testing (Estructura lista para tests)

El código está preparado para:
- Unit tests con Jest + React Testing Library
- Tests de componentes
- Tests de integración
- E2E tests con Playwright

## 📝 Convenciones de Código

### Naming
```javascript
// Componentes: PascalCase
function CharacterCard() { }

// Funciones: camelCase
const fetchCharacters = async () => { }

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = '...'

// Variables: camelCase
const currentPage = 1
```

### Estructura de Archivos
```
- Componentes: .jsx
- Servicios: .js
- Estilos: .css
- Un componente por archivo
```

### Comentarios
```javascript
/**
 * Descripción del componente/función
 * @param {type} name - Descripción del parámetro
 * @returns {type} Descripción del retorno
 */
```

## 🚀 Build para Producción

```bash
npm run build

# Genera:
# - dist/
#   ├── index.html (optimizado)
#   ├── assets/
#   │   ├── index-xxxxx.js (minificado)
#   │   ├── style-xxxxx.css (minificado)
#   │   └── ...

# Características:
# ✅ Minificación
# ✅ Code splitting
# ✅ Asset optimization
# ✅ Source maps (para debugging)
```

## 🎯 Características Avanzadas Implementadas

1. **Smooth Scrolling** - `window.scrollTo({ behavior: 'smooth' })`
2. **Dynamic Imports** - React Router v6 lazy loading ready
3. **Conditional Rendering** - Based on states (loading, error)
4. **Error Boundaries Ready** - Estructura preparada para ErrorBoundary
5. **Accessibility** - Aria-labels ready, semantic HTML
6. **SEO Friendly** - Meta tags en index.html
7. **Progressive Enhancement** - Funciona sin JavaScript (estructura HTML valida)

---

**Última actualización**: 13 de mayo de 2026
