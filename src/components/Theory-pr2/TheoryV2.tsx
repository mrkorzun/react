import { useState } from "react";
import css from "./TheoryV2.module.css";
import FruitsCount from "./FruitsCount/FruitsCount";
import ClickCounter from "./Counter/Counter";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const TheoryV2 = ({ date, module, title }: PageInfo) => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  return (
    <Global date={date} module={module} title={title}>
      <div className={css["module"]}>
        <ClickCounter value={clicks} onUpdate={handleClicks} />
        <FruitsCount />
      </div>
    </Global>
  );
};

export default TheoryV2;
