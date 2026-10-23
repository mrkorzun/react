import { useState } from "react";
import CarList from "../CarList/CarList";
import SearchForm from "../SearchForm/SearchForm";
import { getCarList } from "../services/carService";
import css from "./Cars.module.css";
import type { Car } from "../types/cars";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const onSearchCar = async (query: string) => {
    const result = await getCarList(query);
    setCars(result.items);
  };
  return (
    <div className={css["cars"]}>
      <SearchForm callback={onSearchCar} />
      <CarList cars={cars} />
    </div>
  );
};

export default Cars;
