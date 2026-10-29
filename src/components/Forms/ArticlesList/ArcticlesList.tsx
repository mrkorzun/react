import type { Article } from "../types/article";
import css from "./ArticlesList.module.css";
interface ArcticlesListProps {
  items: Article[];
}

const ArcticlesList = ({ items }: ArcticlesListProps) => {
  return (
    <ol className={css["ol"]}>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default ArcticlesList;
