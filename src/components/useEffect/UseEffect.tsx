import { useEffect, useState } from "react";
import axios from "axios";
import css from "./UseEffect.module.css";

const UseEffect = () => {
  const [person, setPerson] = useState(null);
  const [count, setCount] = useState(0);
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
          Date: <span className={css["spanDate"]}>7 Nov 26</span>
        </p>
        <p className={css["infoText"]}>
          Module: <span className={css["spanModule"]}>3</span>
        </p>
      </div>
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCount(count - 1)}>Back</button>
      <pre>{JSON.stringify(person, null, 4)}</pre>
    </div>
  );
};

export default UseEffect;
