import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (value: string) => void;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("topic") as string;

    if (query === "") {
      alert("Put your search query!");
      return;
    }

    onSubmit(query);
  };
  return (
    <form action={handleSubmit} className={css["searchForm"]}>
      <input type="text" name="topic" placeholder="search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
