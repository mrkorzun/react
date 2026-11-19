import css from "./SearchForm.module.css";
interface SearchFormProps {
  callback: (query: string) => void;
}
const SearchForm = ({ callback }: SearchFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    callback(query);
  };
  return (
    <div className={css["searchForm"]}>
      <form action={handleSubmit}>
        <input type="text" placeholder="write your query" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
