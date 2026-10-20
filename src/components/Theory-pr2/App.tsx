import { useState } from "react";
import css from "./App.module.css";
import Counter from "./Counter/Counter";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className={css["page"]}>
      <Counter value={clicks} onUpdate={handleClicks} />
      <Counter value={clicks} onUpdate={handleClicks} />
      <Counter value={clicks} onUpdate={handleClicks} />
    </div>
  );
};

export default App;
