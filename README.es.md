<p align="center">
  <a href="README.md">English</a> | <a href="README.ru.md">Русский</a> | <a href="README.uk.md">Українська</a> | <b>Español</b>
</p>

<img align="right" alt="Nivel: principiante" src="https://img.shields.io/badge/Nivel-principiante-2EA44F">

# Widget de opiniones — Sip Happens Café

![Demo: votación, estadísticas y Reset en la app terminada](assets/task-01/demo.gif)

## Sobre el proyecto

Una app de una sola página donde el visitante valora una cafetería
(**Good / Neutral / Bad**) y ve al instante las estadísticas: los votos de cada
opción, el total de votos y el porcentaje de opiniones positivas. Mientras no
haya votos se muestra el mensaje «No feedback yet»; el botón **Reset** aparece
solo después del primer voto y reinicia los resultados.

![React: 19](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)
![TypeScript: strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite: 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS: Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=cssmodules&logoColor=white)
![Prettier: formatted](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=white)
![hook: useState](https://img.shields.io/badge/hook-useState-20232A?logo=react&logoColor=white)
![props: typed](https://img.shields.io/badge/props-typed-20232A)
![rendering: conditional](https://img.shields.io/badge/rendering-conditional-20232A)
![state: lifting up](https://img.shields.io/badge/state-lifting%20up-20232A)

### Qué vas a practicar

| Habilidad                            | Dónde se usa en la tarea                                          |
| ------------------------------------ | ----------------------------------------------------------------- |
| Componentes funcionales y JSX        | `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, `Notification`     |
| Composición de componentes           | todos los componentes se renderizan dentro de `App`               |
| Props                                | pasar datos y callbacks de `App` a los componentes hijos          |
| Tipado de props (`interface`)        | `VoteOptionsProps`, `VoteStatsProps`                              |
| Tipos TS compartidos, union types    | `Votes`, `VoteType = 'good' \| 'neutral' \| 'bad'` en `src/types` |
| `useState` con un objeto             | estado `votes` `{ good, neutral, bad }`                           |
| Actualización inmutable del estado   | `handleVote(type)` — spread + clave calculada `[type]`            |
| Elevar el estado (lifting state up)  | el estado vive en `App`, los hijos lo reciben por props           |
| Manejo de eventos                    | `onClick` en los botones → `onVote` / `onReset`                   |
| Datos derivados                      | `totalVotes` y `positiveRate` se calculan, no se guardan          |
| Renderizado condicional              | `VoteStats` o `Notification`, botón Reset con `canReset`          |
| CSS Modules                          | `*.module.css` para cada componente, `modern-normalize`           |

---

## Tarea

Crea una aplicación que permita a los usuarios dejar su opinión sobre una
cafetería. Hay tres opciones de valoración: **good**, **neutral**, **bad**. El
usuario elige una de ellas y ve las estadísticas.

## Requisitos generales

- Cada carpeta de componente debe contener:
  - el archivo del componente con extensión `.tsx` (por ejemplo, `App.tsx`);
  - un archivo de estilos con el mismo nombre terminado en `.module.css`
    (por ejemplo, `App.module.css`).
- Los componentes se exportan por defecto (`export default`).
- Los tipos compartidos por varios componentes están en un archivo aparte,
  `src/types/votes.ts`. Los tipos e interfaces que pertenecen a un solo
  componente se declaran directamente en el archivo de ese componente.
- El código TypeScript debe ser limpio, legible y formateado con Prettier.
- Los estilos se hacen con CSS Modules.
- Se usa `modern-normalize` para unificar los estilos entre navegadores.

## Componentes

La interfaz ya está dividida en componentes y se proporcionan el marcado HTML y
los estilos. Tu tarea es centrarte en la lógica de React y TypeScript: montar la
interfaz, implementar la funcionalidad y añadir el tipado.

Copia los estilos de todos los componentes del repositorio
[goitacademy/react-cafe-styles](https://github.com/goitacademy/react-cafe-styles).
Después de crear tus componentes, copia los archivos `.module.css`
correspondientes en sus carpetas dentro de `src/components`.

Todos los componentes se renderizan dentro del componente `App`.

![Estructura de componentes: CafeInfo, VoteOptions y VoteStats dentro de App](assets/task-01/components.png)

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css
│   ├── CafeInfo/       CafeInfo.tsx, CafeInfo.module.css
│   ├── VoteOptions/    VoteOptions.tsx, VoteOptions.module.css
│   ├── VoteStats/      VoteStats.tsx, VoteStats.module.css
│   └── Notification/   Notification.tsx, Notification.module.css
└── types/
    └── votes.ts
```

---

## Paso 1. Componente `App`

`App` es el contenedor del resto de componentes. Por ahora renderiza este marcado:

```jsx
<div className={css.app}></div>
```

## Paso 2. Componente `CafeInfo`

Un componente con el nombre y una breve descripción de la cafetería:

```jsx
<div className={css.container}>
  <h1 className={css.title}>Sip Happens Café</h1>
  <p className={css.description}>
    Please rate our service by selecting one of the options below.
  </p>
</div>
```

Añádelo a `App`. Después de este paso la app debe verse así:

![Resultado del paso 2: CafeInfo dentro de App, árbol de componentes en React DevTools](assets/task-01/step-02-cafe-info.png)

## Paso 3. Estado de la aplicación

Al hacer clic en uno de los botones **Good / Neutral / Bad** de `VoteOptions`,
hay que guardar la elección del usuario y pasarla a otros componentes, en
particular a `<VoteStats />`.

Crea en `App` el estado `votes`:

```ts
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Tipa el estado con la interfaz `Votes`, declarada y exportada en
`src/types/votes.ts`. En el mismo archivo crea el tipo `VoteType` —
`'good' | 'neutral' | 'bad'`.

Añade en `App` las funciones:

- `handleVote(type)` — actualiza el estado de los votos; su parámetro se tipa con `VoteType`;
- `resetVotes()` — reinicia el estado.

`votes` es la única fuente de verdad; los componentes reciben los valores
actualizados a través de props.

## Paso 4. Componente `VoteOptions`

Renderiza los botones de votación y el botón Reset:

```jsx
<div className={css.container}>
  <button className={css.button}>Good</button>
  <button className={css.button}>Neutral</button>
  <button className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`}>Reset</button>
</div>
```

Props:

| Prop       | Tipo                       | Descripción                                                  |
| ---------- | -------------------------- | ------------------------------------------------------------ |
| `onVote`   | `(type: VoteType) => void` | se llama al hacer clic en un botón de votación               |
| `onReset`  | `() => void`               | se llama al hacer clic en Reset, reinicia los votos          |
| `canReset` | `boolean`                  | si se muestra el botón Reset (por ahora puede ser `true`)    |

Declara la interfaz `VoteOptionsProps` en el archivo del componente. Los botones
deben actualizar el estado en `App`.

Después de este paso la app debe funcionar así:

![Resultado del paso 4: los botones de VoteOptions actualizan el estado](assets/task-01/step-04-vote-options.gif)

## Paso 5. Componente `VoteStats`

Muestra las estadísticas de votos:

```jsx
<div className={styles.container}>
  <p className={styles.stat}>Good: <strong>0</strong></p>
  <p className={styles.stat}>Neutral: <strong>0</strong></p>
  <p className={styles.stat}>Bad: <strong>0</strong></p>
  <p className={styles.stat}>Total: <strong>0</strong></p>
  <p className={styles.stat}>Positive: <strong>0%</strong></p>
</div>
```

Props:

| Prop           | Tipo     | Descripción                                          |
| -------------- | -------- | ---------------------------------------------------- |
| `votes`        | `Votes`  | número de votos para good, neutral, bad              |
| `totalVotes`   | `number` | número total de votos (por ahora puede ser `0`)      |
| `positiveRate` | `number` | porcentaje de votos positivos (por ahora `0`)        |

Declara la interfaz `VoteStatsProps` en el archivo del componente. Al hacer clic
en los botones de `VoteOptions`, los cambios deben verse en `VoteStats`.

Después de este paso la app debe funcionar así:

![Resultado del paso 5: VoteStats muestra los votos](assets/task-01/step-05-vote-stats.gif)

## Paso 6. Cálculo de estadísticas

Los cálculos se hacen en `App` y los valores ya calculados se pasan a
`VoteStats` como props.

```ts
const totalVotes = votes.good + votes.neutral + votes.bad;

const positiveRate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0;
```

> **No hace falta** crear propiedades separadas en el estado para `totalVotes`
> y `positiveRate`: son datos derivados.

Después de este paso la app debe funcionar así:

![Resultado del paso 6: se calculan Total y el porcentaje positivo](assets/task-01/step-06-statistics.gif)

## Paso 7. Componente `Notification`

Muestra un mensaje cuando todavía no hay estadísticas. No recibe props:

```jsx
<p className={css.message}>No feedback yet</p>
```

Renderizado condicional según `totalVotes`:

- `totalVotes > 0` → se renderiza `VoteStats`;
- `totalVotes === 0` → se renderiza `Notification`.

Después de este paso la app debe funcionar así:

![Resultado del paso 7: Notification se muestra hasta el primer voto](assets/task-01/step-07-notification.gif)

## Paso 8. Botón Reset condicional

El botón Reset solo se muestra cuando hay al menos un voto. Usa `totalVotes` en
`App` y pasa el valor correspondiente a `VoteOptions` mediante la prop
`canReset`.

Después de este paso la app está terminada y debe funcionar así:

![Resultado del paso 8: el botón Reset aparece solo tras el primer voto](assets/task-01/step-08-reset.gif)

---

## Entrega para revisión

¿Has resuelto la tarea y quieres que la revise? Estos son los pasos y requisitos.

**Requisitos de la solución**

- [ ] Están hechos todos los pasos 1–8 y marcados todos los puntos del checklist de abajo.
- [ ] `npm run build` y `npm run lint` pasan sin errores.
- [ ] El código está formateado con Prettier.
- [ ] La app está probada en el navegador: votación, estadísticas, `Notification` y Reset funcionan.
- [ ] *(Opcional)* La app está desplegada (Vercel / Netlify / GitHub Pages) y el enlace está en el PR.

**Cómo entregar**

1. Haz un **Fork** de este repositorio (botón arriba a la derecha en GitHub).
2. Clona tu fork y crea tu rama a partir de la rama de la tarea:
   ```bash
   git clone https://github.com/<tu-usuario>/react.git
   cd react
   git checkout task-01-cafe-feedback
   git checkout -b task-01-cafe-feedback-<tu-usuario>
   npm install
   npm run dev
   ```
3. Resuelve la tarea, haz commit y sube la rama a tu fork:
   ```bash
   git push -u origin task-01-cafe-feedback-<tu-usuario>
   ```
4. Abre un **Pull Request** a este repositorio:
   - **base:** `task-01-cafe-feedback` (la rama de la tarea, **no** `main`);
   - **compare:** tu rama del fork;
   - título: `Solución task-01 — <tu-usuario>`;
   - rellena la plantilla del PR (aparece automáticamente).
5. Revisaré el código y dejaré comentarios directamente en el PR.

El PR **no se fusiona**, para que la rama de la tarea siga limpia para futuros
intentos. Tras la revisión lo cerraré y tu solución seguirá en tu fork.

## Checklist

- [ ] Paso 1 — `App`
- [ ] Paso 2 — `CafeInfo`
- [ ] Paso 3 — estado `votes`, tipos `Votes` y `VoteType`
- [ ] Paso 4 — `VoteOptions`
- [ ] Paso 5 — `VoteStats`
- [ ] Paso 6 — `totalVotes` y `positiveRate`
- [ ] Paso 7 — `Notification` y renderizado condicional
- [ ] Paso 8 — Reset condicional
