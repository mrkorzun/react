import Modal from "./Modal";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => setIsModalOpen(true);
  const modalClose = () => setIsModalOpen(false);
  return (
    <>
      <h1>Main content of the page</h1>
      <button onClick={modalOpen}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={modalClose}>
          <h2>Some new Titles</h2>
          <p>This modal reused and has a dinamic contant</p>
        </Modal>
      )}
    </>
  );
};

export default App;
