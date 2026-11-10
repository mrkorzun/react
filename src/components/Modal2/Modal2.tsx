import Modal from "./Modal/Modal";
import { useState } from "react";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Modal2 = ({ date, module, title }: PageInfo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => setIsModalOpen(true);
  const modalClose = () => setIsModalOpen(false);
  return (
    <Global date={date} module={module} title={title}>
      <h2>Main content of the page</h2>
      <button onClick={modalOpen}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={modalClose}>
          <h3>Some new Titles</h3>
          <p>This modal reused and has a dinamic contant</p>
        </Modal>
      )}
    </Global>
  );
};

export default Modal2;
