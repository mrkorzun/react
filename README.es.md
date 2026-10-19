[English](README.md) | [Русский](README.ru.md) | [Українська](README.uk.md) | **Español**

# ⚛️ React — repositorio de aprendizaje

Mi repositorio personal para aprender React. Aquí está todo lo que estudio de
React: teoría, práctica y tareas para volver a resolver, todo en un mismo lugar.

## Cómo está organizado el repositorio

### `main` — aprendizaje actual

Aquí subo lo que estoy estudiando en el curso ahora mismo. Cada carpeta en
`src/components` es una etapa de aprendizaje en forma de mini-proyecto que
resuelvo durante el curso. La lista crece a medida que avanzo.

| Carpeta                       | Mini-proyecto                     |
| ----------------------------- | --------------------------------- |
| `src/components/Theory-pr`    | Teoría en práctica (`useState`)   |
| `src/components/Theory-pr2`   | Teoría en práctica, parte 2       |
| `src/components/Cocktails-pr` | App de cócteles                   |

### Ramas — tareas para volver a resolver

En ramas separadas guardo tareas y componentes a los que quiero volver y
resolver de nuevo para afianzar lo aprendido. Las ramas **nunca se fusionan**
con `main`.

- **`task-XX-nombre`** — el enunciado de la tarea (README) sobre una plantilla
  limpia. Esta rama no la modifico.

## Tareas

| #  | Tarea                                      | Rama                                                                                       | Temas                                                              |
| -- | ------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01 | Widget de opiniones (Sip Happens Café)     | [`task-01-cafe-feedback`](https://github.com/mrkorzun/react/tree/task-01-cafe-feedback) | componentes, props, `useState`, tipado, renderizado condicional |

> La lista completa de ramas con tareas está en esta tabla. Nueva tarea = nueva fila.
> Cómo resolver una tarea y cómo añadir una nueva se describe en el README de
> cada rama de tarea.

## ¿Quieres resolver una tarea y enseñármela?

Estaré encantado de revisar tu solución. Así se hace:

1. Haz un **Fork** de este repositorio (botón arriba a la derecha en GitHub).
2. Clona tu fork y cambia a la rama de la tarea:
   ```bash
   git clone https://github.com/<tu-usuario>/react.git
   cd react
   git checkout task-01-cafe-feedback
   git checkout -b task-01-cafe-feedback-<tu-usuario>
   ```
3. Resuelve la tarea siguiendo su README, haz commit y sube la rama a tu fork:
   ```bash
   git push -u origin task-01-cafe-feedback-<tu-usuario>
   ```
4. Abre un **Pull Request** a este repositorio:
   - **base:** `task-01-cafe-feedback` (la rama de la tarea, **no** `main`);
   - **compare:** tu rama del fork;
   - título: `Solución task-01 — <tu-usuario>`.
5. Revisaré el código y dejaré comentarios directamente en el PR.

Los PR **no se fusionan**, para que la rama de la tarea siga limpia para futuros
intentos. Tras la revisión cerraré el PR y tu solución seguirá en tu fork.

## Stack

- React 19 + TypeScript
- Vite
- CSS Modules + `modern-normalize`
- ESLint, Prettier
- `clsx`, `react-icons`

## Scripts

| Comando           | Qué hace                            |
| ----------------- | ----------------------------------- |
| `npm run dev`     | inicia el servidor de desarrollo    |
| `npm run build`   | comprueba tipos y compila           |
| `npm run preview` | vista previa del build de producción |
| `npm run lint`    | ejecuta ESLint                      |
