import css from "./Counter.module.css";
import type { Clicks } from "../type";
import { useState } from "react";

const Counter = () => {
  const [clicks, setClicks] = useState<Clicks>({ click: 0 });

  const handleClick = () => {
    //Передать новое значение напрямую:
    // setClicks({ click: clicks.click + 1 });
    // Передать функцию от предыдущего состояния:
    setClicks((prev) => ({ click: prev.click + 1 }));
  };

  return (
    <div className={css["counter"]}>
      <button onClick={handleClick}>Click Me: {clicks.click}</button>
    </div>
  );
};

export default Counter;
