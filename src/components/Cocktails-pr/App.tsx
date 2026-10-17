import css from "./App.module.css";

import Header from "./Header/Header";
import CocktailsList from "./CocktailList/CocktailList";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className={css["page"]}>
      <Header />
      <CocktailsList />
      <Footer />
    </div>
  );
};

export default App;
