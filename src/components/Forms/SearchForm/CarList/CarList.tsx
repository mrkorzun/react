import type { Car } from "../types/cars";
import css from "./CarList.module.css";
interface CarListProps {
  cars: Car[];
}
const CarList = ({ cars }: CarListProps) => {
  return (
    <ul>
      {cars.map((car) => {
        return (
          <li className={css["carList"]} key={car._id}>
            <p> {car.make}</p>
            <p> {car.model}</p>
            <p>{car.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
