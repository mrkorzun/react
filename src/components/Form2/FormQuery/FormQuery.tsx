import css from "./FormQuery.module.css";

interface FormQueryProps {
  onSubmit: (query: string) => void;
}

const FormQuery = ({ onSubmit }: FormQueryProps) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("search") as string;
    onSubmit(query);
  };
  return (
    <>
      <form action={handleSubmit} className={css["f"]}>
        <input type="text" name="search" placeholder="searching.." />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default FormQuery;
