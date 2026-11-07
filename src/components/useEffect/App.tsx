import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
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
    <>
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCount(count - 1)}>Back</button>
      <pre>{JSON.stringify(person, null, 4)}</pre>
    </>
  );
};

export default App;
