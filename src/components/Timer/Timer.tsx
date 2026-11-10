import { useState } from "react";
import TimerEffect from "./Timer/TimerEffect";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Timer = ({ date, module, title }: PageInfo) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Global date={date} module={module} title={title}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <TimerEffect />}
    </Global>
  );
};

export default Timer;
