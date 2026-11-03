import { useState } from "react";
import css from "./App.module.css";
import FormQuery from "./FormQuery/FormQuery";
import { takeArticle } from "./services/service";
import type { Article } from "./types/types";

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
    </div>
  );
};

export default App;
