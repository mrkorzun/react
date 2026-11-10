import { useState } from "react";
import Clicks from "./Clicks/Clicks";
import ModalForm from "./ModalForm/ModalForm";
import css from "./LocalStorage.module.css";
const LocalStorage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = () => setIsModalOpen(true);
  const isClose = () => setIsModalOpen(false);

  const handleQuery = () => {};
  return (
    <div className={css["app"]}>
      <div className={css["info"]}>
        <p className={css["infoText"]}>
          Date: <span className={css["spanDate"]}>10 Nov 26</span>
        </p>
        <p className={css["infoText"]}>
          Module: <span className={css["spanModule"]}>3</span>
        </p>
      </div>

      <h1 className={css["title"]}>
        Working with: <span className={css["title-span"]}>LocalStorage</span>
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
