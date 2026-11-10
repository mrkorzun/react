import { useState } from "react";
import css from "./Form2.module.css";
import FormQuery from "./FormQuery/FormQuery";
import { takeArticle } from "./services/service";
import type { Article } from "./types/types";
import ArticleMarkup from "./ArticleMarkup/ArticleMarkup";
import { InfinitySpin } from "react-loader-spinner";

interface Form2Props {
  date: string;
  module: string;
  title: string;
}

const Form2 = ({ date, module, title }: Form2Props) => {
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
    <div className={css["page"]}>
      <div className={css["info"]}>
        <p className={css["infoText"]}>
          Date: <span className={css["spanDate"]}>{date}</span>
        </p>
        <p className={css["infoText"]}>
          Module: <span className={css["spanModule"]}>{module}</span>
        </p>
      </div>
      <h1 className={css["title"]}>
        Working with: <span className={css["title-span"]}>{title}</span>
      </h1>
      <FormQuery onSubmit={handleQuery} />
      {isLoading && (
        <span className={css["infinity"]}>
          <InfinitySpin width="200" color="#504aff" />
        </span>
      )}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {article.length > 0 && <ArticleMarkup items={article} />}
    </div>
  );
};

export default Form2;
