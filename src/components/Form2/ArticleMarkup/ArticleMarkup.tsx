import type { Article } from "../types/types";
import css from "./ArticleMarkup.module.css";

interface ArticleMarkupProps {
  items: Article[];
}

const ArticleMarkup = ({ items }: ArticleMarkupProps) => {
  return (
    <ol className={css["list"]}>
      {items.map((item) => {
        return (
          <li className={css["item"]} key={item.objectID}>
            <a className={css["link"]} href={item.url} target="_blank">
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
};

export default ArticleMarkup;
