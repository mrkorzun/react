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
| Tipos TS compartidos, union types    | `Votes`, `VoteTypes = 'good' \| 'neutral' \| 'bad'` en `src/types` |
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

> 💡 No hace falta escribir tus propios estilos: céntrate solo en la lógica con React y TypeScript.

La maquetación ya está hecha: todos los componentes con su JSX y estilos están
en la rama, así que no pierdes tiempo maquetando y vas directo a la **lógica con
React y TypeScript**: estado, props, tipado, cálculos y renderizado condicional.

## Qué incluye el código inicial

![Estructura de componentes: CafeInfo, VoteOptions y VoteStats dentro de App](assets/task-01/components.png)

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← renderiza todos los componentes
│   ├── CafeInfo/       CafeInfo.tsx, CafeInfo.module.css          ← listo, no necesita lógica
│   ├── VoteOptions/    VoteOptions.tsx, VoteOptions.module.css    ← marcado de los botones
│   ├── VoteStats/      VoteStats.tsx, VoteStats.module.css        ← marcado de las estadísticas (ceros)
│   └── Notification/   Notification.tsx, Notification.module.css  ← mensaje «No feedback yet»
└── types/
    └── Vote.ts                                                    ← Votes y VoteTypes
```

- Cada componente tiene su marcado JSX listo y su propio módulo CSS.
- `App` renderiza `CafeInfo`, `VoteOptions`, `VoteStats` y `Notification` todos
  a la vez; todavía no hay lógica.
- `src/types/Vote.ts` ya exporta los tipos compartidos:

  ```ts
  export interface Votes {
    good: number;
    neutral: number;
    bad: number;
  }

  export type VoteTypes = "good" | "neutral" | "bad";
  ```

## Requisitos generales

- No cambies el marcado ni los estilos: solo añade lógica, props y tipos.
- Los componentes se exportan por defecto (`export default`).
- Los tipos compartidos se importan de `src/types/Vote.ts`. Los tipos e
  interfaces que pertenecen a un solo componente (por ejemplo, las props) se
  declaran directamente en el archivo de ese componente.
- El código TypeScript debe ser limpio, legible y formateado con Prettier.

---

## Paso 1. Explora el código inicial

Arranca el proyecto (`npm install`, `npm run dev`) y revisa los archivos de
`src/components` y `src/types`. Ahora mismo la app muestra a la vez la
información de la cafetería, los botones, las estadísticas con ceros y el
mensaje «No feedback yet», y los botones no hacen nada.

## Paso 2. Estado de la aplicación

Al hacer clic en **Good / Neutral / Bad** en `VoteOptions` hay que guardar la
elección del usuario y pasarla a otros componentes, en particular a
`<VoteStats />`.

Crea en `App` el estado `votes`, tipado con la interfaz `Votes`:

```ts
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Añade en `App` las funciones:

- `handleVote(type)` — actualiza el estado de los votos; su parámetro se tipa con `VoteTypes`;
- `resetVotes()` — reinicia el estado.

`votes` es la única fuente de verdad; los componentes reciben los valores
actualizados a través de props.

## Paso 3. `VoteOptions` — props y clics

Añade props a `VoteOptions` y conéctalas a los botones:

| Prop       | Tipo                        | Descripción                                               |
| ---------- | --------------------------- | --------------------------------------------------------- |
| `onVote`   | `(type: VoteTypes) => void` | se llama al hacer clic en un botón de votación            |
| `onReset`  | `() => void`                | se llama al hacer clic en Reset, reinicia los votos       |
| `canReset` | `boolean`                   | si se muestra el botón Reset (por ahora puede ser `true`) |

Declara la interfaz `VoteOptionsProps` en el archivo del componente. Pasa
`handleVote` y `resetVotes` desde `App`. Los botones deben actualizar el estado
en `App`.

Después de este paso la app debe funcionar así:

![Resultado del paso 3: los botones de VoteOptions actualizan el estado](assets/task-01/step-04-vote-options.gif)

## Paso 4. `VoteStats` — mostrar los votos

Añade props a `VoteStats` y sustituye los ceros del marcado por valores reales:

| Prop           | Tipo     | Descripción                                     |
| -------------- | -------- | ----------------------------------------------- |
| `votes`        | `Votes`  | número de votos para good, neutral, bad         |
| `totalVotes`   | `number` | número total de votos (por ahora puede ser `0`) |
| `positiveRate` | `number` | porcentaje de votos positivos (por ahora `0`)   |

Declara la interfaz `VoteStatsProps` en el archivo del componente. Al hacer clic
en los botones de `VoteOptions`, los cambios deben verse en `VoteStats`.

Después de este paso la app debe funcionar así:

![Resultado del paso 4: VoteStats muestra los votos](assets/task-01/step-05-vote-stats.gif)

## Paso 5. Cálculo de estadísticas

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

![Resultado del paso 5: se calculan Total y el porcentaje positivo](assets/task-01/step-06-statistics.gif)

## Paso 6. `Notification` — renderizado condicional

Ahora `App` renderiza `VoteStats` y `Notification` juntos. Haz que dependa de
`totalVotes`:

- `totalVotes > 0` → se renderiza `VoteStats`;
- `totalVotes === 0` → se renderiza `Notification`.

`Notification` no recibe props.

Después de este paso la app debe funcionar así:

![Resultado del paso 6: Notification se muestra hasta el primer voto](assets/task-01/step-07-notification.gif)

## Paso 7. Botón Reset condicional

El botón Reset solo se muestra cuando hay al menos un voto. Usa `totalVotes` en
`App`, pasa el valor correspondiente a `VoteOptions` mediante la prop
`canReset` y renderiza el botón Reset solo cuando `canReset` sea `true`.

Después de este paso la app está terminada y debe funcionar así:

![Resultado del paso 7: el botón Reset aparece solo tras el primer voto](assets/task-01/step-08-reset.gif)

---

## Entrega para revisión

¿Has resuelto la tarea y quieres que la revise? Estos son los pasos y requisitos.

**Requisitos de la solución**

- [ ] Están hechos todos los pasos 1–7 y marcados todos los puntos del checklist de abajo.
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

- [ ] Paso 1 — código inicial explorado
- [ ] Paso 2 — estado `votes`, `handleVote` y `resetVotes`
- [ ] Paso 3 — `VoteOptions`: props y clics
- [ ] Paso 4 — `VoteStats`: props y valores
- [ ] Paso 5 — `totalVotes` y `positiveRate`
- [ ] Paso 6 — `Notification` y renderizado condicional
- [ ] Paso 7 — Reset condicional
