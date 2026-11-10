import { useState } from "react";
import css from "./Form.module.css";
import Forms from "./Forms/Forms";
import SearchForm from "./NewsForm/SearchForm";
import { searchNews } from "./services/service";
import ArcticlesList from "./ArticlesList/ArcticlesList";
import type { Article } from "./types/article";

interface FormProps {
  date: string;
  module: string;
  title: string;
}

const Form = ({ date, module, title }: FormProps) => {
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
      <div className={css["app"]}>
        <Forms />
        <div className={css["news"]}>
          <SearchForm onSubmit={handleSearch} />
          {articles.length > 0 && <ArcticlesList items={articles} />}
        </div>
      </div>
    </div>
  );
};

export default Form;
