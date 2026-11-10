import { useState } from "react";
import Clicks from "./Clicks/Clicks";
import ModalForm from "./ModalForm/ModalForm";
import css from "./LocalStorage.module.css";

interface LocalStorageProps {
  date: string;
  module: string;
  title: string;
}

const LocalStorage = ({ date, module, title }: LocalStorageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = () => setIsModalOpen(true);
  const isClose = () => setIsModalOpen(false);

  const handleQuery = () => {};
  return (
    <div className={css["app"]}>
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
      <div className={css["modules"]}>
        <Clicks />
        {isModalOpen && <ModalForm onClose={isClose} onSubmit={handleQuery} />}
        <button className={css["btnSearch"]} onClick={isOpen}>
          Open Search Input
        </button>
      </div>
    </div>
  );
};

export default LocalStorage;
