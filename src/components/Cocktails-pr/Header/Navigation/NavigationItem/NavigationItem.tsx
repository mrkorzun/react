import css from "./NavigationItem.module.css";

interface NavigationItemProps {
  item: string;
}

const NavigationItem = ({ item }: NavigationItemProps) => {
  return (
    <li className={css["navigation-item"]}>
      <a href="#" className={css["link"]}>
        {item}
      </a>
    </li>
  );
};

export default NavigationItem;
