import type { Car } from "../../types/car";
import css from "./CarList.module.css";

interface CarListProps {
  items: Car[];
}

const CarList = ({ items }: CarListProps) => {
  return (
    <ul className={css["carList"]}>
      {items.map((el) => {
        return (
          <li key={el._id}>
            <h2>
              {el.model} - {el.price}
            </h2>
            <p>{el.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
