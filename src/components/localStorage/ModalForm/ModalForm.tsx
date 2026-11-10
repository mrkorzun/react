import { useEffect, useId, useState } from "react";
import type { MouseEvent } from "react";
import css from "./ModalForm.module.css";

interface ModalFormProps {
  onClose: () => void;
  onSubmit: (query: string) => void;
}

const ModalForm = ({ onClose, onSubmit }: ModalFormProps) => {
  const id = useId();

  // --- Saved to LocalStorage ---- //
  const [query, setQuery] = useState<string>(() => {
    const savedQuery = window.localStorage.getItem("saved-query");

    if (savedQuery !== null) {
      return JSON.parse(savedQuery);
    }

    return "";
  });

  useEffect(() => {
    localStorage.setItem("saved-query", JSON.stringify(query));
  }, [query]);

  // ---- Modal function ---- ///
  const handleCloseBackdrop = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleModalKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleModalKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleModalKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // ---- FormQuery ---- //
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    onSubmit(query);
    localStorage.removeItem("saved-query");
    setQuery("");
  };
  return (
    <div className={css["backdrop"]} onClick={handleCloseBackdrop}>
      <div className={css["modal"]}>
        <button onClick={onClose} className={css["btnClose"]}>
          &times;
        </button>
        <form className={css["modalForm"]} action={handleSubmit}>
          <label htmlFor={`${id}-search`}>Search:</label>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className={css["query"]}
            id={`${id}-search`}
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Start searching..."
          />
          <button className={css["btnQuery"]} type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
