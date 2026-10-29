import { useState } from "react";
import css from "./App.module.css";
import Form from "./Forms/Form";
import SearchForm from "./NewsForm/SearchForm";
import { searchNews, type Article } from "./services/service";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const handleSearch = async (query: string) => {
    try {
      const data = await searchNews(query, 7);
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css["app"]}>
      <Form />
      <div className={css["news"]}>
        <SearchForm onSubmit={handleSearch} />
        {articles.length > 0 && (
          <ol>
            {articles.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url} target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default App;
