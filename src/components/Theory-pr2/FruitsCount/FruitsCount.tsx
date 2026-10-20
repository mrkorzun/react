import { useState } from "react";
import css from "./FruitsCount.module.css";

const Fruits = {
  Apple: 0,
  Mango: 0,
  Lemos: 0,
};

const FruitsCount = () => {
  const [fruits, setFruits] = useState(Fruits);
  const handleIncrementApple = () => {
    setFruits({ ...fruits, Apple: fruits.Apple + 1 });
  };
  const handleIncrementMango = () => {
    setFruits({ ...fruits, Mango: fruits.Mango + 1 });
  };
  const handleIncrementLemons = () => {
    setFruits({ ...fruits, Lemos: fruits.Lemos + 1 });
  };
  return (
    <div className={css["fruitsCount"]}>
      <button onClick={handleIncrementApple}>Apple: {fruits.Apple}</button>
      <button onClick={handleIncrementMango}>Mango: {fruits.Mango}</button>
      <button onClick={handleIncrementLemons}>Lemons: {fruits.Lemos}</button>
    </div>
  );
};

export default FruitsCount;
