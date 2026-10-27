import css from "./Form.module.css";
import { useId } from "react";

const Form = () => {
  const id = useId();
  return (
    <div className={css["forms"]}>
      <form action="" className={css["login"]}>
        <label htmlFor={`${id}-username`}>Login:</label>
        <input
          id={`${id}-username`}
          type="text"
          name="username"
          defaultValue="Romario Korzun"
          placeholder="username"
        />
        <label htmlFor={`${id}-pass`}>Password:</label>
        <input
          id={`${id}-pass`}
          type="password"
          name="password"
          placeholder="password"
        />
        <label htmlFor={`${id}-age`}>Age:</label>
        <input id={`${id}-age`} type="number" name="age" placeholder="age" />
        <select name="city" id="">
          City:
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
