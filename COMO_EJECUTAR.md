# 🎬 VIDEO TUTORIAL - Cómo ejecutar la aplicación

## Paso a Paso para Ejecutar

### 📺 OPCIÓN 1: Desde Terminal (PowerShell o CMD)

```powershell
# 1. Abre PowerShell o Command Prompt

# 2. Navega al directorio del proyecto
cd "C:\Users\yefre\OneDrive\Escritorio\API de Rick and Morty"

# 3. Instala dependencias (si no las has instalado aún)
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5. Verás algo como esto:
#    ➜  Local:   http://localhost:3000/
#    ➜  press h to show help

# 6. Haz click en http://localhost:3000/ o cópialo en tu navegador
```

### 📺 OPCIÓN 2: Desde VS Code (Recomendado)

```
1. Abre Terminal en VS Code (Ctrl + `)
2. Escribe: cd "API de Rick and Morty"
3. Escribe: npm run dev
4. Haz click en http://localhost:3000 en la terminal
5. ¡Tu app se abrirá en el navegador!
```

### 📺 OPCIÓN 3: Desde File Explorer

```
1. Navega a C:\Users\yefre\OneDrive\Escritorio\API de Rick and Morty
2. Mantén Shift presionado
3. Haz click derecho → "Abrir terminal aquí"
4. Escribe: npm run dev
5. Abre navegador en http://localhost:3000
```

---

## 🎯 Una Vez que la Aplicación Esté Ejecutándose

### ¿Qué verás?

```
┌─────────────────────────────────────┐
│  🔬 Rick and Morty - Navbar         │
│  [Inicio] [Filtrar por Especie ▼]   │
└─────────────────────────────────────┘
│
│ ┌──────────────────────────────────┐
│ │ 🔍 Buscar por nombre...  [✕]    │
│ └──────────────────────────────────┘
│
│ Total de personajes: 826
│
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ │ [Imagen]    │ │ [Imagen]    │ │ [Imagen]    │ │ [Imagen]    │
│ │ Rick        │ │ Morty       │ │ Summer      │ │ Jerry       │
│ │ Especie: H  │ │ Especie: H  │ │ Especie: H  │ │ Especie: H  │
│ │ Estado: ✓   │ │ Estado: ✓   │ │ Estado: ✓   │ │ Estado: ✓   │
│ │ Género: M   │ │ Género: M   │ │ Género: F   │ │ Género: M   │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ │ ...más...   │ │ ...más...   │ │ ...más...   │ │ ...más...   │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
│
│ [← Anterior] [1] [2] [3] [4] [5] ... [42] [Siguiente →]
└─────────────────────────────────────┘
```

---

## 🧪 Funcionalidades para Probar

### 1️⃣ Búsqueda por Nombre
- Escribe "Rick" en el buscador
- La lista se filtrará en tiempo real
- Verás a todos los Rick disponibles

### 2️⃣ Filtrado por Especie
- Abre el menú "Filtrar por Especie" en el Navbar
- Selecciona "Aliens"
- Serás llevado a `/species/Alien`
- Verás solo personajes alienígenas

### 3️⃣ Paginación
- Ve a la página 2, 3, etc.
- Prueba ir a la última página
- El scroll será suave (smooth scroll)

### 4️⃣ Página 404
- Escribe en la barra de direcciones: `http://localhost:3000/xyz`
- Verás una página 404 personalizada
- Haz click en "Volver al Inicio"

### 5️⃣ Estados de Personaje
- Busca "Jerry" (personaje muerto)
- El estado aparecerá en rojo
- Busca "Rick" (personaje vivo)
- El estado aparecerá en verde

---

## 🎮 Atajos del Navegador

```
Ctrl + K  → Buscar (Chrome, Edge, Firefox)
F3        → Buscar en página
Ctrl + +  → Aumentar zoom
Ctrl + -  → Disminuir zoom
F12       → Abrir Developer Tools
```

---

## 🔄 Recargar la Aplicación

Si algo no funciona:

```
1. Presiona Ctrl + R (recargar página)
2. O Ctrl + Shift + R (recargar sin caché)
3. O Ctrl + F5 (forzar recarga)
```

---

## 🆘 Solución de Problemas

### ❌ Error: "Cannot find module 'react'"
```
Solución: npm install
```

### ❌ Error: "Puerto 3000 en uso"
```
Vite automáticamente usará el siguiente puerto (3001, 3002, etc.)
O cierra la otra aplicación que usa puerto 3000
```

### ❌ La app se carga pero dice "Cargando..."
```
Espera 2-3 segundos, es normal la primera vez
Si sigue sin cargar, verifica tu conexión a internet
```

### ❌ Las imágenes no se muestran
```
1. Verifica conexión a internet
2. Recarga la página (Ctrl + R)
3. Limpia caché (Ctrl + Shift + Delete)
```

### ❌ El buscador no funciona
```
1. Asegúrate de tener conexión a internet
2. Abre DevTools (F12)
3. Ve a la pestaña "Network"
4. Verifica que las peticiones a rickandmortyapi.com sean exitosas
```

---

## 📊 Información de Depuración

### Para Abrir DevTools
```
F12                  → Abrir Developer Tools
Ctrl + Shift + I     → Alternativa en Windows/Linux
Cmd + Option + I     → Alternativa en Mac
```

### Pestaña Console
```
1. Abre DevTools (F12)
2. Ve a "Console"
3. Aquí verás logs y errores
```

### Pestaña Network
```
1. Abre DevTools (F12)
2. Ve a "Network"
3. Aquí verás las peticiones a la API
```

---

## 🔧 Comandos Útiles

```bash
# Ver versión de Node
node --version

# Ver versión de npm
npm --version

# Ver que versiones de paquetes están instaladas
npm list

# Instalar una dependencia nueva (ejemplo)
npm install axios

# Desinstalar una dependencia
npm uninstall axios

# Actualizar todas las dependencias
npm update

# Limpiar caché de npm
npm cache clean --force

# Ver puertos en uso en Windows
netstat -ano | findstr :3000
```

---

## 🌐 URLs Importantes

| URL | Descripción |
|-----|-------------|
| `http://localhost:3000/` | Página principal |
| `http://localhost:3000/species/Human` | Personajes humanos |
| `http://localhost:3000/species/Alien` | Personajes alienígenas |
| `http://localhost:3000/xyz` | Página 404 (prueba) |

---

## 📱 Prueba en Móvil

### Desde otro dispositivo en la red local:

```
1. En tu PC, obtén tu dirección IP:
   - Windows: ipconfig (busca IPv4 Address)
   - Ej: 192.168.1.100

2. En el móvil/tablet, abre navegador:
   http://192.168.1.100:3000

3. ¡Prueba la app en móvil!
```

---

## 🚀 Compilar para Producción

Cuando quieras hacer deploy:

```bash
# Compilar
npm run build

# Esto generará una carpeta "dist/" con tu app optimizada
# Puedes subirlo a:
# - Vercel
# - Netlify
# - GitHub Pages
# - Tu servidor web
```

---

## 💡 Consejos Finales

✅ La app funciona sin internet (datos cacheados)
✅ Todos los cambios en código se reflejan al instante
✅ No necesitas hacer nada después de editar (Hot Reload automático)
✅ Puedes parar el servidor con Ctrl + C
✅ Puedes reiniciar con `npm run dev` nuevamente

---

## 🎉 ¡Listo!

Ahora:

1. Abre terminal
2. Navega al directorio
3. Ejecuta `npm run dev`
4. Abre `http://localhost:3000`
5. ¡Disfruta tu app! 🚀

---

**Última actualización**: 13 de mayo de 2026

Más información en: `README.md`, `INICIO_RAPIDO.md`, `TECH_STACK.md`, `PERSONALIZACION.md`
