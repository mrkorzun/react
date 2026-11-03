import axios from "axios";
import type { Article } from "../types/types";

interface ArticleResponse {
  hits: Article[];
}

export const takeArticle = async (query: string, perPage = 10) => {
  const res = await axios.get<ArticleResponse>(
    "https://hn.algolia.com/api/v1/search",
    {
      params: { query, hitsPerPage: perPage },
    },
  );
  return res.data.hits;
};
