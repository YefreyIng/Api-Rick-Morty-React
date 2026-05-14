# 🔬 Rick and Morty - Single Page Application (SPA)

Una aplicación web moderna construida con React, Vite y react-router-dom que permite explorar personajes de la serie Rick and Morty consumiendo una API pública.

## 🌟 Características Principales

✅ **Visualización de Personajes**
- Muestra todos los personajes de la serie desde la API
- Tarjetas interactivas con información detallada
- Imágenes de alta calidad de cada personaje

✅ **Búsqueda Avanzada**
- Búsqueda en tiempo real por nombre de personaje
- Filtrado por especie (Humanos, Aliens, Robots, etc.)
- Rutas dinámicas para filtros: `/species/Human`, `/species/Alien`

✅ **Navegación Intuitiva**
- Navbar pegajoso con menú principal
- Dropdown con filtros rápidos por especie
- React Router para navegación SPA fluida

✅ **Paginación Completa**
- Sistema de paginación personalizado
- Navegación rápida entre páginas
- Indicador de página actual

✅ **Estados de Carga y Errores**
- Spinner de carga elegante durante las peticiones
- Manejo robusto de errores
- Página 404 personalizada para rutas no encontradas

✅ **Diseño Responsivo**
- Completamente responsivo para PC, tablet y móvil
- Grid adaptativo para tarjetas
- Interfaz optimizada para todos los dispositivos

✅ **Experiencia Visual Moderna**
- Tema oscuro futurista
- Gradientes y transiciones suaves
- Efectos hover interactivos
- Animaciones fluidas
- Paleta de colores moderna (verde neón)

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx              # Barra de navegación principal
│   ├── CharacterCard.jsx       # Tarjeta individual de personaje
│   ├── CharacterList.jsx       # Grid de personajes
│   ├── SearchFilter.jsx        # Buscador por nombre
│   ├── Pagination.jsx          # Sistema de paginación
│   ├── Loader.jsx              # Spinner de carga
│   └── ErrorMessage.jsx        # Componente de errores
│
├── pages/
│   ├── Home.jsx                # Página principal con búsqueda
│   ├── SpeciesPage.jsx         # Página de filtrado por especie
│   └── NotFound.jsx            # Página 404 personalizada
│
├── services/
│   └── api.js                  # Servicio para consumir la API
│
├── styles/
│   ├── app.css                 # Estilos globales
│   ├── navbar.css              # Estilos del navbar
│   ├── character-card.css      # Estilos de tarjetas
│   ├── character-list.css      # Estilos del grid
│   ├── loader.css              # Estilos del spinner
│   ├── error-message.css       # Estilos de errores
│   ├── search-filter.css       # Estilos del buscador
│   ├── pagination.css          # Estilos de paginación
│   ├── home.css                # Estilos de Home
│   ├── species-page.css        # Estilos de SpeciesPage
│   └── not-found.css           # Estilos de 404
│
├── App.jsx                     # Componente principal con rutas
├── main.jsx                    # Punto de entrada de React
└── index.html                  # HTML principal
```

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Navega al directorio del proyecto:**
```bash
cd "API de Rick and Morty"
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre tu navegador y accede a:**
```
http://localhost:3000
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación de producción
npm run preview
```

## 🎨 Detalles de Diseño

### Paleta de Colores
- **Color Primario**: `#1db954` (Verde Spotify)
- **Color Secundario**: `#191414` (Negro profundo)
- **Acento**: `#1ed760` (Verde neón)
- **Fondo**: Gradiente oscuro futurista

### Componentes del Diseño
- **Tarjetas**: Efecto hover con elevación y zoom de imagen
- **Búsqueda**: Entrada con animación de enfoque
- **Paginación**: Botones interactivos con estados activos
- **Navbar**: Menú dropdown con transiciones suaves
- **Cargador**: Spinner animado con pulso de texto

### Tipografía
- Font principal: Sistema de fuentes del sistema operativo
- Pesos: 500 (normal), 600 (semibold), 700 (bold)

## 📊 Información de Personajes

Cada personaje muestra:
- **Imagen**: Retrato del personaje
- **Nombre**: Nombre completo
- **Especie**: Tipo de criatura
- **Estado**: Vivo (Alive), Muerto (Dead) o Desconocido (Unknown)
- **Género**: Masculino, Femenino, Sin género, Desconocido
- **Ubicación**: Última ubicación conocida

## 🔄 Rutas de la Aplicación

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con todos los personajes |
| `/species/:species` | Personajes filtrados por especie |
| `*` | Página 404 para rutas no encontradas |

## 🌐 API Utilizada

**Rick and Morty API**
- Documentación: https://rickandmortyapi.com
- Base URL: `https://rickandmortyapi.com/api`
- Endpoints:
  - `GET /character` - Obtiene personajes con paginación
  - `GET /character?name={name}` - Busca por nombre
  - `GET /character?species={species}` - Filtra por especie
  - `GET /character/:id` - Obtiene un personaje específico

## 🛠️ Tecnologías Utilizadas

- **React 18.2**: Librería UI
- **Vite 4.4**: Build tool y dev server
- **React Router DOM 6.14**: Enrutamiento
- **CSS3 Moderno**: Estilos con variables CSS y Flexbox/Grid
- **Fetch API**: Peticiones HTTP
- **ES6+**: JavaScript moderno

## 💻 Compatibilidad de Navegadores

- ✅ Chrome (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Edge (última versión)
- ✅ Navegadores móviles modernos

## 📱 Responsividad

La aplicación está optimizada para:
- **PC**: 1200px+ (Grid de 4-5 columnas)
- **Tablet**: 768px-1199px (Grid de 2-3 columnas)
- **Móvil**: 480px-767px (Grid de 2 columnas)
- **Teléfono pequeño**: <480px (Grid de 2 columnas adaptado)

## ✨ Características Extra Implementadas

✅ **Buscador en tiempo real** - Busca mientras escribes
✅ **Paginación completa** - Navega por todas las páginas
✅ **Transiciones suaves** - Animaciones fluidas en toda la app
✅ **Estados responsivos** - Color diferenciado para estados (vivo/muerto)
✅ **Dropdown de especies** - Acceso rápido a filtros
✅ **Página 404 personalizada** - Diseño tematizado

## 🐛 Manejo de Errores

- Mensajes de error claros y visibles
- Validación de respuestas de API
- Fallback cuando no hay resultados
- Toast de carga durante peticiones

## 📝 Notas de Desarrollo

- El código incluye comentarios en partes importantes
- Componentes reutilizables y modularizados
- Seguimiento de buenas prácticas de React
- Variables CSS para mantener consistencia de diseño
- Funciones de utilidad en el servicio de API

## 🚀 Próximas Mejoras Posibles

- Guardar búsquedas recientes en localStorage
- Modo claro/oscuro
- Detalles completos de personaje en una página individual
- Filtros múltiples simultáneamente
- Animaciones más avanzadas
- Progressive Web App (PWA)

## 📄 Licencia

Este proyecto utiliza la API pública de Rick and Morty. Para más información sobre los términos de uso, visita: https://rickandmortyapi.com

## 👨‍💻 Autor

Creado como proyecto de demostración con React y Vite.

---

¡Disfruta explorando el universo de Rick and Morty! 🚀✨
