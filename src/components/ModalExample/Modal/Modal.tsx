import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <h1>Modal View</h1>
        <button className={css["close-modal"]} onClick={onClose}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
