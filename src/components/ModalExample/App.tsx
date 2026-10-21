import { useState } from "react";
import css from "./App.module.css";
import Modal from "./Modal/Modal";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={css["app"]}>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && <Modal onClose={handleClose} />}
    </div>
  );
};

export default App;
