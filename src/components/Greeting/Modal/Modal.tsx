import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useId } from "react";

interface ModalProps {
  onSubmit: (value: string) => void;
}

const Modal = ({ onSubmit }: ModalProps) => {
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("username") as string;
    onSubmit(name);
  };

  const id = useId();
  return createPortal(
    <div className={css["dropdown"]}>
      <div className={css["modal"]}>
        <form action={handleSubmit} className={css["form"]}>
          <label className={css["title"]} htmlFor={id}>
            What is your name:
          </label>
          <input
            className={css["inputName"]}
            id={id}
            type="text"
            name="username"
            placeholder="My name is..."
          />
          <button className={css["submit"]}>Submit</button>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
