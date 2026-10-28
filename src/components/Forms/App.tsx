import css from "./App.module.css";
import Form from "./Forms/Form";
import SearchForm from "./NewsForm/SearchForm";
import { searchNews } from "./services/service";

const App = () => {
  const handleSearch = async (query: string) => {
    try {
      const data = await searchNews(query);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css["app"]}>
      <Form />
      <SearchForm onSubmit={handleSearch} />
    </div>
  );
};

export default App;
