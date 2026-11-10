import { useState } from "react";
import TimerEffect from "./Timer/TimerEffect";
import css from "./Timer.module.css";

interface TimerProps {
  date: string;
  module: string;
  title: string;
}

const Timer = ({ date, module, title }: TimerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css["page"]}>
      <div className={css["info"]}>
        <p className={css["infoText"]}>
          Date: <span className={css["spanDate"]}>{date}</span>
        </p>
        <p className={css["infoText"]}>
          Module: <span className={css["spanModule"]}>{module}</span>
        </p>
      </div>
      <h1 className={css["title"]}>
        Working with: <span className={css["title-span"]}>{title}</span>
      </h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <TimerEffect />}
    </div>
  );
};

export default Timer;
