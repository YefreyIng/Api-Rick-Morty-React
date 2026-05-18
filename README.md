# Rick and Morty - Single Page Application (SPA)

Aplicacion web construida con React, Vite y react-router-dom que consume la API publica de Rick and Morty.

## Descripcion

- Muestra personajes de Rick and Morty con imagen, nombre, especie, estado y genero.
- Permite buscar por nombre en tiempo real.
- Filtra personajes por especie usando rutas dinamicas.
- Maneja cargas, errores y una pagina 404 personalizada.
- Funciona en escritorio, tablet y movil.

## Estructura del proyecto

- src/App.jsx: rutas principales y layout.
- src/main.jsx: punto de entrada de React.
- src/services/api.js: funciones para consumir la API.
- src/components: componentes reutilizables.
- src/pages: pantallas de la aplicacion.
- src/styles: estilos CSS.
- index.html: plantilla HTML principal.

## Requisitos

- Node.js 14 o superior.
- npm instalado.

## Instalacion

1. Abre una terminal o PowerShell.
2. Ve al directorio del proyecto. Por ejemplo:

```bash
cd "c:\Users\yefre\OneDrive\Escritorio\API de Rick and Morty"
```

3. Verifica que Node.js y npm estén instalados:

```bash
node -v
npm -v
```

4. Instala las dependencias del proyecto:

```bash
npm install
```

5. Si la instalación se completa sin errores, inicia la aplicación en modo desarrollo:

```bash
npm run dev
```

6. Abre el navegador en la dirección que muestre Vite, por ejemplo:

```text
http://localhost:3000
```

> Si no tienes Node.js instalado, descárgalo desde https://nodejs.org/.

## Ejecucion en desarrollo

Para iniciar la aplicacion en modo desarrollo, ejecuta:

```bash
npm run dev
```

Abre el navegador en:

http://localhost:3000

## Deploy en Vercel

La aplicación también está publicada aquí:

https://api-rick-morty-react-seven.vercel.app/

## Compilar para produccion

```bash
npm run build
```

Para previsualizar la version de produccion:

```bash
npm run preview
```

## Rutas principales

- / - Pagina principal con todos los personajes.
- /species/:species - Filtrado por especie.
- * - Pagina 404 para rutas no encontradas.

## API utilizada

Base URL: https://rickandmortyapi.com/api

Endpoints principales:

- /character
- /character?name={name}
- /character?species={species}

## Notas

- El proyecto usa React 18 y Vite 4.

Hecho por Yefrey Medina

