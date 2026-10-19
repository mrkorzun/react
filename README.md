<p align="center">
  <b>English</b> | <a href="README.ru.md">Русский</a> | <a href="README.uk.md">Українська</a> | <a href="README.es.md">Español</a>
</p>

<img align="right" alt="Level: beginner" src="https://img.shields.io/badge/Level-beginner-2EA44F">

# Feedback widget — Sip Happens Café

![Demo: voting, statistics and Reset in the finished app](assets/task-01/demo.gif)

## About the project

A single-page app where a visitor rates a café (**Good / Neutral / Bad**) and
immediately sees the statistics: the count for each option, the total number of
votes and the percentage of positive feedback. Until the first vote a
"No feedback yet" message is shown; the **Reset** button appears only after at
least one vote and clears the results.

![React: 19](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)
![TypeScript: strict](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite: 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS: Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=cssmodules&logoColor=white)
![Prettier: formatted](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=white)
![hook: useState](https://img.shields.io/badge/hook-useState-20232A?logo=react&logoColor=white)
![props: typed](https://img.shields.io/badge/props-typed-20232A)
![rendering: conditional](https://img.shields.io/badge/rendering-conditional-20232A)
![state: lifting up](https://img.shields.io/badge/state-lifting%20up-20232A)

### What you'll practice

| Skill                         | Where it's used in the task                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| Function components and JSX   | `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, `Notification`       |
| Component composition         | all components are rendered inside `App`                            |
| Props                         | passing data and callbacks from `App` to child components           |
| Typing props (`interface`)    | `VoteOptionsProps`, `VoteStatsProps`                                |
| Shared TS types, union types  | `Votes`, `VoteTypes = 'good' \| 'neutral' \| 'bad'` in `src/types` |
| `useState` with an object     | `votes` state `{ good, neutral, bad }`                              |
| Immutable state updates       | `handleVote(type)` — spread + computed key `[type]`                 |
| Lifting state up              | state lives in `App`, children get it through props                 |
| Event handling                | `onClick` on buttons → `onVote` / `onReset`                         |
| Derived data                  | `totalVotes` and `positiveRate` are computed, not stored            |
| Conditional rendering         | `VoteStats` vs `Notification`, Reset button via `canReset`          |
| CSS Modules                   | `*.module.css` for every component, `modern-normalize`              |

---

## Task

Build an app that lets users leave feedback about a café. There are three
rating options: **good**, **neutral**, **bad**. The user picks one of them and
sees the statistics.

> 💡 No need to write your own styles — just focus on React and TypeScript logic.

The markup is already done: all components with JSX and styles are in the
branch, so you don't spend time on layout and go straight to the **React and
TypeScript logic** — state, props, typing, calculations and conditional
rendering.

## What's already in the starter

![Component structure: CafeInfo, VoteOptions and VoteStats inside App](assets/task-01/components.png)

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css                    ← renders all components
│   ├── CafeInfo/       CafeInfo.tsx, CafeInfo.module.css          ← done, no logic needed
│   ├── VoteOptions/    VoteOptions.tsx, VoteOptions.module.css    ← markup of the buttons
│   ├── VoteStats/      VoteStats.tsx, VoteStats.module.css        ← markup of the stats (zeros)
│   └── Notification/   Notification.tsx, Notification.module.css  ← "No feedback yet" message
└── types/
    └── Vote.ts                                                    ← Votes and VoteTypes
```

- Every component has ready JSX markup and its own CSS module.
- `App` renders `CafeInfo`, `VoteOptions`, `VoteStats` and `Notification` all at
  once — there is no logic yet.
- `src/types/Vote.ts` already exports the shared types:

  ```ts
  export interface Votes {
    good: number;
    neutral: number;
    bad: number;
  }

  export type VoteTypes = "good" | "neutral" | "bad";
  ```

## General requirements

- Don't change the markup and styles — only add logic, props and types.
- Components are exported with a default export (`export default`).
- Shared types are imported from `src/types/Vote.ts`. Types and interfaces that
  belong to a single component (for example, props) are declared directly in
  that component's file.
- TypeScript code must be clean, readable and formatted with Prettier.

---

## Step 1. Explore the starter

Run the project (`npm install`, `npm run dev`) and look through the files in
`src/components` and `src/types`. Right now the app shows the café info, the
buttons, the stats with zeros and the "No feedback yet" message at the same
time, and the buttons don't do anything.

## Step 2. App state

Clicking **Good / Neutral / Bad** in `VoteOptions` must store the user's choice
and pass it to other components, in particular `<VoteStats />`.

Create a `votes` state in `App` typed with the `Votes` interface:

```ts
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Add these functions to `App`:

- `handleVote(type)` — updates the vote state; its parameter is typed with `VoteTypes`;
- `resetVotes()` — resets the state.

`votes` is the single source of truth; components receive up-to-date values
through props.

## Step 3. `VoteOptions` — props and clicks

Add props to `VoteOptions` and hook them up to the buttons:

| Prop       | Type                        | Description                                             |
| ---------- | --------------------------- | ------------------------------------------------------- |
| `onVote`   | `(type: VoteTypes) => void` | called when a voting button is clicked                  |
| `onReset`  | `() => void`                | called when Reset is clicked, resets the votes          |
| `canReset` | `boolean`                   | whether to show the Reset button (`true` for now is OK) |

Declare a `VoteOptionsProps` interface in the component file. Pass
`handleVote` and `resetVotes` from `App`. The buttons must update the state in
`App`.

After this step the app should work like this:

![Step 3 result: VoteOptions buttons update state](assets/task-01/step-04-vote-options.gif)

## Step 4. `VoteStats` — show the votes

Add props to `VoteStats` and replace the zeros in the markup with real values:

| Prop           | Type     | Description                                   |
| -------------- | -------- | --------------------------------------------- |
| `votes`        | `Votes`  | vote counts for good, neutral, bad            |
| `totalVotes`   | `number` | total number of votes (`0` for now is OK)     |
| `positiveRate` | `number` | percentage of positive votes (`0` for now)    |

Declare a `VoteStatsProps` interface in the component file. Clicking the
buttons in `VoteOptions` must update what `VoteStats` shows.

After this step the app should work like this:

![Step 4 result: VoteStats shows the votes](assets/task-01/step-05-vote-stats.gif)

## Step 5. Calculating statistics

Calculations are done in `App`, and the ready values are passed to `VoteStats`
as props.

```ts
const totalVotes = votes.good + votes.neutral + votes.bad;

const positiveRate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0;
```

> You **don't need** separate state properties for `totalVotes` and
> `positiveRate` — they are derived data.

After this step the app should work like this:

![Step 5 result: total and positive percentage are calculated](assets/task-01/step-06-statistics.gif)

## Step 6. `Notification` — conditional rendering

Right now `App` renders `VoteStats` and `Notification` together. Make it depend
on `totalVotes`:

- `totalVotes > 0` → render `VoteStats`;
- `totalVotes === 0` → render `Notification`.

`Notification` takes no props.

After this step the app should work like this:

![Step 6 result: Notification is shown until the first vote](assets/task-01/step-07-notification.gif)

## Step 7. Conditional Reset button

The Reset button is shown only when there is at least one vote. Use
`totalVotes` in `App`, pass the matching value to `VoteOptions` via the
`canReset` prop, and render the Reset button only when `canReset` is `true`.

After this step the app is complete and should work like this:

![Step 7 result: Reset button appears only after the first vote](assets/task-01/step-08-reset.gif)

---

## Submitting for review

Solved the task and want me to review it? Here are the steps and requirements.

**Requirements for the solution**

- [ ] All steps 1–7 are done and every item in the checklist below is ticked.
- [ ] `npm run build` and `npm run lint` pass without errors.
- [ ] Code is formatted with Prettier.
- [ ] The app is checked in the browser: voting, statistics, `Notification` and Reset work.
- [ ] *(Optional)* The app is deployed (Vercel / Netlify / GitHub Pages) and the link is added to the PR.

**How to submit**

1. **Fork** this repository (button at the top right on GitHub).
2. Clone your fork and create your branch from the task branch:
   ```bash
   git clone https://github.com/<your-username>/react.git
   cd react
   git checkout task-01-cafe-feedback
   git checkout -b task-01-cafe-feedback-<your-username>
   npm install
   npm run dev
   ```
3. Solve the task, commit and push the branch to your fork:
   ```bash
   git push -u origin task-01-cafe-feedback-<your-username>
   ```
4. Open a **Pull Request** to this repository:
   - **base:** `task-01-cafe-feedback` (the task branch, **not** `main`);
   - **compare:** your branch from the fork;
   - title: `Solution task-01 — <your-username>`;
   - fill in the PR template (it appears automatically).
5. I'll review the code and leave comments right in the PR.

The PR is **not merged**, so the task branch stays clean for future attempts.
After the review I'll close it, and your solution stays in your fork.

## Checklist

- [ ] Step 1 — explored the starter
- [ ] Step 2 — `votes` state, `handleVote` and `resetVotes`
- [ ] Step 3 — `VoteOptions`: props and clicks
- [ ] Step 4 — `VoteStats`: props and values
- [ ] Step 5 — `totalVotes` and `positiveRate`
- [ ] Step 6 — `Notification` and conditional rendering
- [ ] Step 7 — conditional Reset
