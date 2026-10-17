import css from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const nav = ["About Us", "Cocktails", "Pricing", "Contacts"];

const Navigation = () => {
  return (
    <nav className={css["navigation"]}>
      {nav.map((el) => (
        <NavigationItem key={el.length} item={el} />
      ))}
    </nav>
  );
};

export default Navigation;
