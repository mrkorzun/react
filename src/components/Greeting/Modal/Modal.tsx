import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect, useId } from "react";

interface ModalProps {
  onSubmit: (value: string) => void;
}

const Modal = ({ onSubmit }: ModalProps) => {
  const id = useId();
  const handleSubmit = (formData: FormData) => {
    const name = (formData.get("username") as string).trim();
    if (name === "") return;
    onSubmit(name);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return createPortal(
    <div className={css["backdrop"]}>
      <div className={css["modal"]} role="dialog" aria-modal="true">
        <form action={handleSubmit} className={css["form"]}>
          <label className={css["title"]} htmlFor={id}>
            Put your name:
          </label>
          <input
            className={css["inputName"]}
            id={id}
            type="text"
            name="username"
            placeholder="My name is..."
            required
            autoFocus
          />
          <button className={css["submit"]}>Submit</button>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
