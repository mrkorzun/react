import { useState } from "react";
import css from "./App.module.css";
import Form from "./Forms/Form";
import SearchForm from "./NewsForm/SearchForm";
import { searchNews } from "./services/service";
import ArcticlesList from "./ArticlesList/ArcticlesList";
import type { Article } from "./types/article";

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
        {articles.length > 0 && <ArcticlesList items={articles} />}
      </div>
    </div>
  );
};

export default App;
