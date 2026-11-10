import css from "./Coctails.module.css";

import Header from "./Header/Header";
import CocktailsList from "./CocktailList/CocktailList";
import Footer from "./Footer/Footer";

interface CoctailsProps {
  date: string;
  module: string;
  title: string;
}

const Coctails = ({ date, module, title }: CoctailsProps) => {
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
      <Header />
      <CocktailsList />
      <Footer />
    </div>
  );
};

export default Coctails;
