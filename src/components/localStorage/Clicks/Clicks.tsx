import { useEffect, useState } from "react";
import css from "./Clicks.module.css";

const Clicks = () => {
  const [click, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("count-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });
  useEffect(() => {
    localStorage.setItem("count-clicks", JSON.stringify(click));
  }, [click]);
  return (
    <div className={css["counter"]}>
      <h2 className={css["title"]}>
        You clicked: <span className={css["highlight"]}>{click}</span>
        <span className={css["lowerText"]}>times</span>
      </h2>
      <div className={css["btnsSection"]}>
        <button
          className={[css.btnCount, css.button].join(" ")}
          onClick={() => {
            setClicks(click + 1);
          }}
        >
          Clicks: {click}{" "}
        </button>
        <button
          className={[css.btnReset, css.button].join(" ")}
          onClick={() => setClicks(0)}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
};

export default Clicks;
