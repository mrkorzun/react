import { useState } from "react";
import Clicks from "./Clicks/Clicks";
import ModalForm from "./ModalForm/ModalForm";
import css from "./LocalStorage.module.css";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const LocalStorage = ({ date, module, title }: PageInfo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = () => setIsModalOpen(true);
  const isClose = () => setIsModalOpen(false);

  const handleQuery = () => {};
  return (
    <Global date={date} module={module} title={title}>
      <div className={css["modules"]}>
        <Clicks />
        {isModalOpen && <ModalForm onClose={isClose} onSubmit={handleQuery} />}
        <button className={css["btnSearch"]} onClick={isOpen}>
          Open Search Input
        </button>
      </div>
    </Global>
  );
};

export default LocalStorage;
