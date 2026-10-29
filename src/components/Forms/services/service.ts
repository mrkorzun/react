import axios from "axios";
import type { Article } from "../types/article";

interface ArticlesResponse {
  hits: Article[];
}

export const searchNews = async (query: string, perPage = 10) => {
  const response = await axios.get<ArticlesResponse>(
    "https://hn.algolia.com/api/v1/search",
    { params: { query, hitsPerPage: perPage } },
  );
  return response.data.hits;
};
