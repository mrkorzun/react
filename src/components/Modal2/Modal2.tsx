import Modal from "./Modal/Modal";
import { useState } from "react";
import css from "./Modal2.module.css";

interface Modal2Props {
  date: string;
  module: string;
  title: string;
}

const Modal2 = ({ date, module, title }: Modal2Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => setIsModalOpen(true);
  const modalClose = () => setIsModalOpen(false);
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
      <h2>Main content of the page</h2>
      <button onClick={modalOpen}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={modalClose}>
          <h3>Some new Titles</h3>
          <p>This modal reused and has a dinamic contant</p>
        </Modal>
      )}
    </div>
  );
};

export default Modal2;
