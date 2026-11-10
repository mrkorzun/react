import { useEffect, useState } from "react";
import axios from "axios";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const UseEffect = ({ date, module, title }: PageInfo) => {
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
    <Global date={date} module={module} title={title}>
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCount(count - 1)}>Back</button>
      <pre>{JSON.stringify(person, null, 4)}</pre>
    </Global>
  );
};

export default UseEffect;
