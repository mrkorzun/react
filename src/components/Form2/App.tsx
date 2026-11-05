import { useState } from "react";
import css from "./App.module.css";
import FormQuery from "./FormQuery/FormQuery";
import { takeArticle } from "./services/service";
import type { Article } from "./types/types";
import ArticleMarkup from "./ArticleMarkup/ArticleMarkup";
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const [article, setArticle] = useState<Article[]>([]);
  const [isLoading, setLoading] = useState(false);
  const handleQuery = async (query: string) => {
    try {
      setLoading(true);
      setArticle([]);
      const data = await takeArticle(query);
      setLoading(false);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css["app"]}>
      <FormQuery onSubmit={handleQuery} />
      {isLoading && (
        <span className={css["infinity"]}>
          <InfinitySpin width="200" color="#504aff" />
        </span>
      )}
      {article.length > 0 && <ArticleMarkup items={article} />}
    </div>
  );
};

export default App;
