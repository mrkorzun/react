import { useEffect, useState } from "react";
import axios from "axios";
import css from "./UseEffect.module.css";

interface UseEffectProps {
  date: string;
  module: string;
  title: string;
}

const UseEffect = ({ date, module, title }: UseEffectProps) => {
  const [person, setPerson] = useState(null);
  const [count, setCount] = useState(1);
  console.log("App render");
  useEffect(() => {
    axios
      .get(`https://swapi.info/api/people/${count}`)
      .then((res) => setPerson(res.data));
  }, [count]);
  console.log("App rendered!");

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
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCount(count - 1)}>Back</button>
      <pre>{JSON.stringify(person, null, 4)}</pre>
    </div>
  );
};

export default UseEffect;
