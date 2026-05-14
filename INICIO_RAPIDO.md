#  Instrucciones de Inicio Rápido

##  Proyecto Creado Exitosamente

Tu aplicación SPA de Rick and Morty está lista para usar.

##  Requisitos Previos

-  Node.js instalado
-  npm o yarn disponible en terminal

##  Pasos para Ejecutar

### 1️⃣ Navega al directorio del proyecto
```bash
cd "API de Rick and Morty"
```

### 2️⃣ Las dependencias ya están instaladas 
Si necesitas reinstalar:
```bash
npm install
```

### 3️⃣ Inicia el servidor de desarrollo
```bash
npm run dev
```

### 4️⃣ Abre en tu navegador
Haz clic en el enlace que aparece en la terminal (típicamente):
```
http://localhost:3000
```

##  Archivos Principales

### Componentes (`src/components/`)
- **Navbar.jsx** - Barra de navegación con dropdown
- **CharacterCard.jsx** - Tarjeta de personaje individual
- **CharacterList.jsx** - Grid de personajes
- **SearchFilter.jsx** - Buscador por nombre
- **Pagination.jsx** - Sistema de paginación
- **Loader.jsx** - Spinner de carga
- **ErrorMessage.jsx** - Manejo de errores

### Páginas (`src/pages/`)
- **Home.jsx** - Página principal (todos los personajes)
- **SpeciesPage.jsx** - Filtrado por especie
- **NotFound.jsx** - Página 404 personalizada

### Servicios (`src/services/`)
- **api.js** - Funciones para consumir la API de Rick and Morty

### Estilos (`src/styles/`)
- 11 archivos CSS con diseño responsivo moderno

##  Características Implementadas

 **Búsqueda en tiempo real** por nombre de personaje
 **Filtrado por especie** con rutas dinámicas (`/species/Human`, etc.)
 **Paginación completa** para navegar resultados
 **Estados de carga** con spinner elegante
 **Manejo de errores** con mensajes claros
 **Página 404** personalizada para rutas inexistentes
 **Diseño responsivo** (PC, tablet, móvil)
 **Navbar pegajoso** con menú desplegable
 **Tarjetas interactivas** con hover effects
 **Tema moderno** oscuro con colores neón

## 🌐 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio - Todos los personajes |
| `/species/Human` | Personajes humanos |
| `/species/Alien` | Personajes alienígenas |
| `/species/Robot` | Robots |
| `/species/Cronenberg` | Cronenbergs |
| `/species/Disease` | Enfermedades |
| Cualquier otra ruta | Página 404 |

##  Responsive en

-  PC (1200px+)
-  Tablet (768px - 1199px)
-  Móvil (480px - 767px)
-  Teléfono pequeño (<480px)

##  Comandos Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

##  Próximos Pasos

1. Ejecuta `npm run dev`
2. Abre `http://localhost:3000` en tu navegador
3. ¡Explora todos los personajes de Rick and Morty!
4. Prueba:
   - Buscar personajes por nombre
   - Filtrar por especie usando el navbar
   - Navegar entre páginas
   - Acceder a rutas inexistentes para ver la página 404

##  Información de la API

- **API**: Rick and Morty API
- **URL**: https://rickandmortyapi.com/api
- **Datos**: +800 personajes disponibles
- **Sin autenticación requerida**: 

##  Consejos

- El proyecto usa **Vite** para desarrollo super rápido
- Los cambios se reflejan instantáneamente en el navegador (Hot Reload)
- Todos los componentes son reutilizables
- El código está comentado en partes importantes
- Los estilos usan variables CSS para fácil personalización

## ❓ Solución de Problemas

### Puerto 3000 en uso
```bash
# Vite usará el siguiente puerto disponible automáticamente
npm run dev
```

### Error de módulos
```bash
# Limpia caché de npm y reinstala
npm cache clean --force
npm install
```

### Problemas de API
- Asegúrate de tener conexión a internet
- La API debe estar disponible en: https://rickandmortyapi.com/api

##  ¡Listo!

Tu aplicación está completamente funcional y lista para usar.
Disfruta explorando el universo de Rick and Morty. 

---

**Última actualización**: 13 de mayo de 2026

