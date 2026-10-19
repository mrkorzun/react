**English** | [Русский](README.ru.md) | [Українська](README.uk.md) | [Español](README.es.md)

# Feedback widget — Sip Happens Café

## How to solve the task

```bash
# open the task
git checkout task-01-cafe-feedback

# start a new attempt
git checkout -b task-01-cafe-feedback-try1
npm install
npm run dev

# reset the attempt back to the task if you want to start over
git reset --hard task-01-cafe-feedback
```

## About the project

A single-page app where a visitor rates a café (**Good / Neutral / Bad**) and
immediately sees the statistics: the count for each option, the total number of
votes and the percentage of positive feedback. Until the first vote a
"No feedback yet" message is shown; the **Reset** button appears only after at
least one vote and clears the results.

**Level:** beginner · first React + TypeScript app

### What you'll practice

| Skill                         | Where it's used in the task                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| Function components and JSX   | `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, `Notification`       |
| Component composition         | all components are rendered inside `App`                            |
| Props                         | passing data and callbacks from `App` to child components           |
| Typing props (`interface`)    | `VoteOptionsProps`, `VoteStatsProps`                                |
| Shared TS types, union types  | `Votes`, `VoteType = 'good' \| 'neutral' \| 'bad'` in `src/types` |
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

## General requirements

- Each component folder must contain:
  - the component file with the `.tsx` extension (e.g. `App.tsx`);
  - a styles file with the same name ending in `.module.css`
    (e.g. `App.module.css`).
- Components are exported with a default export (`export default`).
- Shared types used by several components live in a separate file,
  `src/types/votes.ts`. Types and interfaces that belong to a single component
  are declared directly in that component's file.
- TypeScript code must be clean, readable and formatted with Prettier.
- Styling is done with CSS Modules.
- `modern-normalize` is used to unify styles across browsers.
- After pushing changes, wait 5 minutes before submitting the work for review —
  GitHub needs time to update.

## Components

The interface is already split into components, and the HTML markup and styles
are provided. Your job is to focus on the React and TypeScript logic: assemble
the interface, implement the functionality and add the typings.

Copy the styles for all components from the
[goitacademy/react-cafe-styles](https://github.com/goitacademy/react-cafe-styles)
repository. After creating your components, copy the matching `.module.css`
files into the corresponding folders in `src/components`.

All components are rendered inside the `App` component.

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

## Step 1. `App` component

`App` is the container for the other components. For now it renders this markup:

```jsx
<div className={css.app}></div>
```

## Step 2. `CafeInfo` component

A component with the café's name and a short description:

```jsx
<div className={css.container}>
  <h1 className={css.title}>Sip Happens Café</h1>
  <p className={css.description}>
    Please rate our service by selecting one of the options below.
  </p>
</div>
```

Add it to `App`.

## Step 3. App state

When one of the **Good / Neutral / Bad** buttons in `VoteOptions` is clicked,
the user's choice has to be stored and passed to other components, in
particular `<VoteStats />`.

Create a `votes` state in `App`:

```ts
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Type the state with a `Votes` interface declared and exported in
`src/types/votes.ts`. In the same file create a `VoteType` type —
`'good' | 'neutral' | 'bad'`.

Add these functions to `App`:

- `handleVote(type)` — updates the vote state; its parameter is typed with `VoteType`;
- `resetVotes()` — resets the state.

`votes` is the single source of truth; components receive up-to-date values
through props.

## Step 4. `VoteOptions` component

Renders the voting buttons and the Reset button:

```jsx
<div className={css.container}>
  <button className={css.button}>Good</button>
  <button className={css.button}>Neutral</button>
  <button className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`}>Reset</button>
</div>
```

Props:

| Prop       | Type                       | Description                                             |
| ---------- | -------------------------- | ------------------------------------------------------- |
| `onVote`   | `(type: VoteType) => void` | called when a voting button is clicked                  |
| `onReset`  | `() => void`               | called when Reset is clicked, resets the votes          |
| `canReset` | `boolean`                  | whether to show the Reset button (`true` for now is OK) |

Declare a `VoteOptionsProps` interface in the component file. The buttons must
update the state in `App`.

## Step 5. `VoteStats` component

Displays the vote statistics:

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

| Prop           | Type     | Description                                   |
| -------------- | -------- | --------------------------------------------- |
| `votes`        | `Votes`  | vote counts for good, neutral, bad            |
| `totalVotes`   | `number` | total number of votes (`0` for now is OK)     |
| `positiveRate` | `number` | percentage of positive votes (`0` for now)    |

Declare a `VoteStatsProps` interface in the component file. Clicking the
buttons in `VoteOptions` must update what `VoteStats` shows.

## Step 6. Calculating statistics

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

## Step 7. `Notification` component

Shows a message when there are no statistics yet. Takes no props:

```jsx
<p className={css.message}>No feedback yet</p>
```

Conditional rendering based on `totalVotes`:

- `totalVotes > 0` → render `VoteStats`;
- `totalVotes === 0` → render `Notification`.

## Step 8. Conditional Reset button

The Reset button is shown only when there is at least one vote. Use
`totalVotes` in `App` and pass the matching value to `VoteOptions` via the
`canReset` prop.

---

## Submission

- [ ] The app's **production URL** is added in the LMS (not a repository link).
- [ ] All functionality is checked on the live page before submitting.
- [ ] 5 minutes have passed since the last push.

## Checklist

- [ ] Step 1 — `App`
- [ ] Step 2 — `CafeInfo`
- [ ] Step 3 — `votes` state, `Votes` and `VoteType` types
- [ ] Step 4 — `VoteOptions`
- [ ] Step 5 — `VoteStats`
- [ ] Step 6 — `totalVotes` and `positiveRate`
- [ ] Step 7 — `Notification` and conditional rendering
- [ ] Step 8 — conditional Reset

---

## How to add a new task

```bash
git checkout main
git checkout -b task-02-name
# replace README*.md with the task description (all language versions)
git add README*.md
git commit -m "task-02: add README"
git push -u origin task-02-name
```

Then add a row to the "Tasks" table in every language version of the
[`main` branch README](https://github.com/mrkorzun/react#tasks).
