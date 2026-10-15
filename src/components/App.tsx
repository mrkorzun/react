// src/components/App.tsx
import Alert from "./Alert";
import Button from "./Button";
import UserMenu from "./UserModule";

export default function App() {
  return (
    <>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />

      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <UserMenu name="Mario" />
    </>
  );
}
