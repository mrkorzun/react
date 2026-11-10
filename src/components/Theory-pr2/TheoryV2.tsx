import { useState } from "react";
import css from "./TheoryV2.module.css";
import FruitsCount from "./FruitsCount/FruitsCount";
import ClickCounter from "./Counter/Counter";

interface TheoryV2Props {
  date: string;
  module: string;
  title: string;
}

const TheoryV2 = ({ date, module, title }: TheoryV2Props) => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };
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
      <div className={css["module"]}>
        <ClickCounter value={clicks} onUpdate={handleClicks} />
        <FruitsCount />
      </div>
    </div>
  );
};

export default TheoryV2;
