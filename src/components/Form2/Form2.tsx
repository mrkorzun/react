import { useState } from "react";
import css from "./Form2.module.css";
import FormQuery from "./FormQuery/FormQuery";
import { takeArticle } from "./services/service";
import type { Article } from "./types/types";
import ArticleMarkup from "./ArticleMarkup/ArticleMarkup";
import { InfinitySpin } from "react-loader-spinner";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Form2 = ({ date, module, title }: PageInfo) => {
  const [article, setArticle] = useState<Article[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const handleQuery = async (query: string) => {
    try {
      setLoading(true);
      setArticle([]);
      const data = await takeArticle(query);
      setArticle(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Global date={date} module={module} title={title}>
      <FormQuery onSubmit={handleQuery} />
      {isLoading && (
        <span className={css["infinity"]}>
          <InfinitySpin width="200" color="#504aff" />
        </span>
      )}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {article.length > 0 && <ArticleMarkup items={article} />}
    </Global>
  );
};

export default Form2;
