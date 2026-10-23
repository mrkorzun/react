import css from "./SearchForm.module.css";

interface SearchFormProps {
  callback: (query: string) => void;
}

const SearchForm = ({ callback }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const searchInput = formData.get("query") as string;

    callback(searchInput);
  };

  return (
    <form className={css["form"]} action={handleSubmit}>
      <input
        className={css["input"]}
        type="text"
        name="query"
        placeholder="Searching.."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
