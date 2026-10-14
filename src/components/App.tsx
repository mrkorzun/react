// src/components/App.tsx
import Alert from "./Alert";

export default function App() {
  return (
    <>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Alert type="miss" />
    </>
  );
}
