<p align="center">
  <a href="README.md">English</a> | <a href="README.ru.md">Русский</a> | <a href="README.uk.md">Українська</a> | <b>Español</b>
</p>

<img align="right" alt="Nivel: intermedio" src="https://img.shields.io/badge/Nivel-intermedio-DBAB09">

# Búsqueda de películas — TMDB

<p align="center">
  <img src="assets/task-02/demo.gif" alt="Demo: búsqueda, cuadrícula de películas, ventana modal y notificaciones en la app terminada" width="800">
</p>

## Sobre el proyecto

Una app de una sola página para buscar películas por palabra clave. El usuario
escribe una consulta, la app envía una petición HTTP a
[TMDB](https://www.themoviedb.org/) y muestra una cuadrícula de pósteres. Al
hacer clic en un póster se abre una ventana modal con la imagen de fondo, la
sinopsis, la fecha de estreno y la valoración. Mientras la petición está en
curso se muestra un loader; ante un error de red, un mensaje de error; ante una
consulta vacía o un resultado vacío, una notificación emergente.

![React: 19](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)
![TypeScript: strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite: 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS: Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=cssmodules&logoColor=white)
![Prettier: formatted](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=white)
![HTTP: axios](https://img.shields.io/badge/HTTP-axios-5A29E4?logo=axios&logoColor=white)
![API: TMDB](https://img.shields.io/badge/API-TMDB-01B4E4?logo=themoviedatabase&logoColor=white)
![toasts: react--hot--toast](https://img.shields.io/badge/toasts-react--hot--toast-20232A)
![form: actions](https://img.shields.io/badge/form-actions-20232A?logo=react&logoColor=white)
![hook: useEffect](https://img.shields.io/badge/hook-useEffect-20232A?logo=react&logoColor=white)
![modal: createPortal](https://img.shields.io/badge/modal-createPortal-20232A)

### Qué vas a practicar

| Habilidad                                    | Dónde se usa en la tarea                                               |
| -------------------------------------------- | ---------------------------------------------------------------------- |
| Peticiones HTTP con `axios`                  | `fetchMovies` en `src/services/movieService.ts`                        |
| Cabecera de autorización, variables de entorno | `Authorization: Bearer ...` desde `VITE_TMDB_TOKEN`                  |
| Tipado de respuestas de la API               | `Movie`, `FetchMoviesResponse`, `axios.get<FetchMoviesResponse>`       |
| `async/await`, `try/catch/finally`           | manejador de búsqueda en `App`                                         |
| Form Actions de React 19                     | `<form action={handleSubmit}>` + `formData.get("query")` en `SearchBar` |
| Varios estados                               | `movies`, `isLoading`, `isError`, `selectedMovie` en `App`             |
| Renderizado condicional                      | `Loader`, `ErrorMessage`, `MovieGrid`, `MovieModal`                    |
| Notificaciones emergentes                    | `react-hot-toast`: consulta vacía y «no se encontraron películas»      |
| Props callback con argumentos                | `onSubmit(query)`, `onSelect(movie)`, `onClose()`                      |
| Portales                                     | `MovieModal` se renderiza en `document.body` con `createPortal`        |
| `useEffect` con limpieza                     | listener de ESC y bloqueo del scroll de `body` en `MovieModal`         |
| CSS Modules                                  | `*.module.css` listos para cada componente                             |

---

## Tarea

Crea una app que busque películas por palabra clave usando la API de TMDB.

> 💡 No hace falta escribir estilos propios: céntrate solo en la lógica de React y TypeScript.

El marcado ya está hecho: todos los componentes con JSX y estilos están en la
rama,
así que vas directo a la **lógica de React y TypeScript**: peticiones HTTP,
estado, props, tipado, renderizado condicional y la ventana modal.

## Qué incluye el código inicial

<p align="center">
  <img src="assets/task-02/components.png" alt="Estructura de componentes: SearchBar, MovieGrid, Loader, ErrorMessage y MovieModal dentro de App" width="800">
</p>

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← renderiza los componentes
│   ├── SearchBar/      SearchBar.tsx, SearchBar.module.css        ← cabecera con el formulario de búsqueda
│   ├── MovieGrid/      MovieGrid.tsx, MovieGrid.module.css        ← marcado de la cuadrícula (una tarjeta de ejemplo)
│   ├── Loader/         Loader.tsx, Loader.module.css              ← «Loading movies, please wait...»
│   ├── ErrorMessage/   ErrorMessage.tsx, ErrorMessage.module.css  ← «There was an error, please try again...»
│   └── MovieModal/     MovieModal.tsx, MovieModal.module.css      ← marcado del modal (aún no se renderiza)
└── types/
    └── movie.ts                                                   ← interfaz Movie
.env.example                                                       ← plantilla para VITE_TMDB_TOKEN
```

- Cada componente tiene su marcado JSX listo y su propio módulo CSS.
- `App` renderiza `SearchBar`, `Loader`, `ErrorMessage` y `MovieGrid` todos a
  la vez: todavía no hay lógica. `MovieModal` está importado pero comentado,
  porque su backdrop taparía toda la página.
- `axios` y `react-hot-toast` ya están en `package.json`.
- `src/types/movie.ts` ya exporta el tipo de película:

  ```ts
  export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
  }
  ```

## Requisitos generales

- No cambies el marcado ni los estilos: solo añade lógica, props y tipos.
- Los componentes se exportan por defecto (`export default`).
- Los tipos compartidos viven en `src/types`. Los tipos e interfaces que
  pertenecen a un solo componente (por ejemplo, las props) se declaran
  directamente en el archivo de ese componente.
- Nunca guardes el token de acceso en el código: solo en la variable de entorno
  `VITE_TMDB_TOKEN`. El archivo `.env` ya está en `.gitignore`.
- El código TypeScript debe ser limpio, legible y formateado con Prettier.

---

## Paso 1. Token de acceso de TMDB

1. Regístrate en [themoviedb.org](https://www.themoviedb.org/signup) y
   confirma tu correo.
2. Abre **Settings → API**, crea una aplicación (tipo *Developer*, uso
   personal/educativo) y rellena el formulario.
3. Copia el **API Read Access Token** (la cadena JWT larga, no la API Key corta).
4. Crea un archivo `.env` en la raíz del proyecto a partir de `.env.example`:

   ```bash
   VITE_TMDB_TOKEN=your_tmdb_read_access_token
   ```

5. Reinicia `npm run dev`: Vite lee `.env` solo al arrancar. En el código el
   token está disponible como `import.meta.env.VITE_TMDB_TOKEN`.

Documentación útil:
[autenticación](https://developer.themoviedb.org/docs/authentication-application),
[buscar películas](https://developer.themoviedb.org/reference/search-movie),
[construir URLs de imágenes](https://developer.themoviedb.org/docs/image-basics).

## Paso 2. Servicio `fetchMovies`

Crea `src/services/movieService.ts` con una función `fetchMovies`:

- recibe la consulta de búsqueda (`string`) y devuelve `Promise<Movie[]>`;
- envía `GET https://api.themoviedb.org/3/search/movie`;
- describe la respuesta con una interfaz `FetchMoviesResponse` (como mínimo
  `results: Movie[]`) y pásala a axios: `axios.get<FetchMoviesResponse>(...)`.

El objeto de configuración de axios se ve así:

```ts
{
  params: {
    query, // tus parámetros
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}
```

> Comprueba el resultado en la consola antes de conectar la interfaz: llama una
> vez a `fetchMovies("batman")` y asegúrate de recibir un array de películas.

## Paso 3. `SearchBar`: Form Actions y validación

| Prop       | Tipo                      | Descripción                            |
| ---------- | ------------------------- | -------------------------------------- |
| `onSubmit` | `(query: string) => void` | pasa el valor del input al padre       |

- Declara una interfaz `SearchBarProps` en el archivo del componente.
- Gestiona el formulario con **Form Actions**: `<form action={handleSubmit}>`,
  donde `handleSubmit(formData: FormData)` lee `formData.get("query")`.
- Si el campo está vacío (tras `trim()`), muestra la notificación
  `Please enter your search query.` y no llames a `onSubmit`.
- Esta comprobación se hace en `SearchBar`. Añade `<Toaster />` de
  `react-hot-toast` una sola vez en `App`, o las notificaciones no se verán.

Después de este paso la app debería funcionar así:

![Resultado del paso 3: aparece una notificación si la consulta está vacía](assets/task-02/01-validation.gif)

## Paso 4. Búsqueda en `App` y `MovieGrid`

En `App` crea el estado `movies` (`Movie[]`) y un manejador de búsqueda que
pasarás a `SearchBar` mediante `onSubmit`. El manejador:

1. vacía la colección anterior (`setMovies([])`): cada nueva búsqueda empieza
   de cero;
2. llama a `fetchMovies(query)` y guarda el resultado en `movies`.

Añade props a `MovieGrid`:

| Prop       | Tipo                     | Descripción                            |
| ---------- | ------------------------ | -------------------------------------- |
| `movies`   | `Movie[]`                | el array de películas                  |
| `onSelect` | `(movie: Movie) => void` | se llama al hacer clic en una tarjeta  |

- Declara una interfaz `MovieGridProps`.
- Renderiza un `<li key={movie.id}>` por película con `map()`.
- URL del póster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  `alt` — el título de la película.
- `MovieGrid` se renderiza **solo cuando** `movies.length > 0`.

Después de este paso la app debería funcionar así:

![Resultado del paso 4: la búsqueda muestra una cuadrícula de pósteres](assets/task-02/02-search-batman.gif)

## Paso 5. `Loader` y `ErrorMessage`

Añade los estados `isLoading` e `isError` (`boolean`) en `App`.

- Antes de la petición: `isLoading = true`, `isError = false`.
- Envuelve la petición en `try/catch/finally`: en `catch` pon `isError = true`,
  en `finally`, `isLoading = false`.
- `Loader` se renderiza **en lugar de** la cuadrícula mientras dura la petición.
- `ErrorMessage` se renderiza **en lugar de** la cuadrícula si la petición falla.

> Para probar `ErrorMessage`, estropea temporalmente el token en `.env` y
> reinicia el servidor de desarrollo.

## Paso 6. Notificación «no se encontraron películas»

Si la petición tuvo éxito pero el array está vacío, muestra la notificación
`No movies found for your request.` Esta comprobación se hace en `App`, en el
manejador de búsqueda.

Después de este paso la app debería funcionar así:

![Resultado del paso 6: aparece una notificación cuando no se encuentra nada](assets/task-02/04-no-results.gif)

## Paso 7. `MovieModal`

Al hacer clic en una tarjeta se abre un modal con los detalles de la película.

En `App`:

- crea el estado `selectedMovie` (`Movie | null`);
- pasa `setSelectedMovie` (o un wrapper) a `MovieGrid` como `onSelect`;
- renderiza `MovieModal` solo cuando `selectedMovie` no es `null`;
- al cerrar el modal, `selectedMovie` vuelve a `null`.

Props de `MovieModal`:

| Prop      | Tipo         | Descripción              |
| --------- | ------------ | ------------------------ |
| `movie`   | `Movie`      | la película seleccionada |
| `onClose` | `() => void` | cierra el modal          |

Requisitos:

- el modal se renderiza fuera del árbol principal con `createPortal(..., document.body)`;
- se cierra con el botón **×**, con **Escape** y con un clic en el backdrop
  (pero no en el propio modal: compara `event.target` y `event.currentTarget`);
- mientras está abierto, el scroll de la página está bloqueado
  (`document.body.style.overflow = "hidden"`);
- imagen de fondo: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
- sustituye los marcadores por `title`, `overview`, `release_date` y
  `vote_average` (formato: `7.2/10`).

> **La limpieza es obligatoria.** Añade el listener de `keydown` y el bloqueo
> del scroll en `useEffect`, y en la función que devuelve elimina el listener y
> restaura `overflow`. Al cerrar no debe quedar nada.

Después de este paso la app está terminada y debería funcionar así:

![Resultado del paso 7: el modal se abre, se cierra y muestra los datos de la película](assets/task-02/03-modal-marvel.gif)

---

## Enviar a revisión

¿Has resuelto la tarea y quieres que la revise? Estos son los pasos y requisitos.

**Requisitos de la solución**

- [ ] Todos los pasos 1–7 están hechos y todos los puntos de la checklist de abajo están marcados.
- [ ] El token **no** está en el código ni en los commits: solo en un `.env` local.
- [ ] `npm run build` y `npm run lint` pasan sin errores.
- [ ] El código está formateado con Prettier.
- [ ] La app está probada en el navegador: búsqueda, notificaciones, loader, error, cuadrícula y modal funcionan.
- [ ] *(Opcional)* La app está desplegada (Vercel / Netlify) con `VITE_TMDB_TOKEN`
      configurado en el hosting, y el enlace está añadido al PR.

**Cómo enviarla**

1. Haz **Fork** de este repositorio (botón arriba a la derecha en GitHub).
2. Clona tu fork y crea tu rama a partir de la rama de la tarea:
   ```bash
   git clone https://github.com/<tu-usuario>/react.git
   cd react
   git checkout task-02-movie-search
   git checkout -b task-02-movie-search-<tu-usuario>
   npm install
   cp .env.example .env   # y pega tu token
   npm run dev
   ```
3. Resuelve la tarea, haz commit y sube la rama a tu fork:
   ```bash
   git push -u origin task-02-movie-search-<tu-usuario>
   ```
4. Abre un **Pull Request** a este repositorio:
   - **base:** `task-02-movie-search` (la rama de la tarea, **no** `main`);
   - **compare:** tu rama del fork;
   - título: `Solución task-02 — <tu-usuario>`;
   - rellena la plantilla del PR (aparece automáticamente).
5. Revisaré el código y dejaré comentarios directamente en el PR.

El PR **no se fusiona**, así la rama de la tarea queda limpia para futuros
intentos. Tras la revisión lo cerraré, y tu solución se queda en tu fork.

## Checklist

- [ ] Paso 1 — token de TMDB en `.env`
- [ ] Paso 2 — `fetchMovies` en `services/movieService.ts`, respuesta tipada
- [ ] Paso 3 — `SearchBar`: Form Actions, `onSubmit`, notificación de consulta vacía
- [ ] Paso 4 — estado `movies`, manejador de búsqueda, `MovieGrid`
- [ ] Paso 5 — `Loader` y `ErrorMessage`
- [ ] Paso 6 — notificación «No movies found»
- [ ] Paso 7 — `MovieModal`: portal, ×/ESC/backdrop, bloqueo del scroll, limpieza
