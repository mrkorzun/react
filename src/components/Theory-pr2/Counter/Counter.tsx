import css from "./Counter.module.css";

import { useState } from "react";

const Counter = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={css["counter"]}>
      <button onClick={handleClick}>Click Me: {clicks}</button>
    </div>
  );
};

export default Counter;
