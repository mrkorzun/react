import Header from "./Header/Header";
import CocktailsList from "./CocktailList/CocktailList";
import Footer from "./Footer/Footer";

import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Coctails = ({ date, module, title }: PageInfo) => {
  return (
    <Global date={date} module={module} title={title}>
      <Header />
      <CocktailsList />
      <Footer />
    </Global>
  );
};

export default Coctails;
