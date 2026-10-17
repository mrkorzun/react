import css from "./CocktailCard.module.css";

interface CocktailCardProps {
  title: string;
  img: string;
  desc: string;
}

const CocktailCard = ({ title, img, desc }: CocktailCardProps) => {
  return (
    <li className={css["cocktail-card"]}>
      <img className={css["img"]} src={img} alt={title} />
      <h2 className={css["title"]}>{title}</h2>
      <p className={css["desc"]}>{desc}</p>
    </li>
  );
};

export default CocktailCard;
