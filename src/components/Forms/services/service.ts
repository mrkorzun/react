import axios from "axios";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesResponse {
  hits: Article[];
}

export const searchNews = async (query: string) => {
  const response = await axios.get<ArticlesResponse>(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
  );
  console.log(response.data);
};
