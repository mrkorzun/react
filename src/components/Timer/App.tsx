import { useState } from "react";
import Timer from "./Timer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <Timer />}
    </>
  );
};

export default App;
