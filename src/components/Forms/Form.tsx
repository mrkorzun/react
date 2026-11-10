import { useState } from "react";
import css from "./Form.module.css";
import Forms from "./Forms/Forms";
import SearchForm from "./NewsForm/SearchForm";
import { searchNews } from "./services/service";
import ArcticlesList from "./ArticlesList/ArcticlesList";
import type { Article } from "./types/article";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Form = ({ date, module, title }: PageInfo) => {
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
    <Global date={date} module={module} title={title}>
      <div className={css["app"]}>
        <Forms />
        <div className={css["news"]}>
          <SearchForm onSubmit={handleSearch} />
          {articles.length > 0 && <ArcticlesList items={articles} />}
        </div>
      </div>
    </Global>
  );
};

export default Form;
