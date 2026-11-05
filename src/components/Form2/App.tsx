import { useState } from "react";
import css from "./App.module.css";
import FormQuery from "./FormQuery/FormQuery";
import { takeArticle } from "./services/service";
import type { Article } from "./types/types";
import ArticleMarkup from "./ArticleMarkup/ArticleMarkup";

const App = () => {
  const [article, setArticle] = useState<Article[]>([]);
  const handleQuery = async (query: string) => {
    try {
      const data = await takeArticle(query);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css["app"]}>
      <FormQuery onSubmit={handleQuery} />
      {article.length > 0 && <ArticleMarkup items={article} />}
    </div>
  );
};

export default App;
