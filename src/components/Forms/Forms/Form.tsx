import css from "./Form.module.css";
import { useId } from "react";

const Form = () => {
  const id = useId();
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    console.log(username);
  };
  return (
    <div className={css["forms"]}>
      <form action={handleSubmit} className={css["login"]}>
        <label htmlFor={`${id}-username`}>Full Name:</label>
        <input
          id={`${id}-username`}
          type="text"
          name="username"
          defaultValue="Romario Korzun"
          placeholder="username"
        />
        <fieldset className={css["gender"]}>
          <legend>Gender:</legend>
          <label htmlFor={`${id}-male`} className={css["genderLabel"]}>
            Male:
            <input type="radio" name="gender" value="male" id={`${id}-male`} />
          </label>

          <label htmlFor={`${id}-female`} className={css["genderLabel"]}>
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              id={`${id}-female`}
            />
          </label>
        </fieldset>

        <label htmlFor={`${id}-pass`}>Password:</label>
        <input
          id={`${id}-pass`}
          type="password"
          name="password"
          placeholder="password"
        />
        <label htmlFor={`${id}-passwordRepeat`}>Repeat password:</label>
        <input
          id={`${id}-passwordRepeat`}
          type="password"
          name="passwordRepeat"
          placeholder="password"
        />
        <label htmlFor={`${id}-age`}>Age:</label>
        <input id={`${id}-age`} type="number" name="age" placeholder="age" />

        <label htmlFor={`${id}-city`}>City:</label>
        <select className={css["list"]} name="city" id={`${id}-city`}>
          <option value="kiev">Kiev</option>
          <option value="dubai">Dubai</option>
          <option value="barcelona">Barcelona</option>
        </select>
        <button type="submit">Registration</button>
        {/* <label htmlFor="" className={css["polici"]}>
          <input type="checkbox" value="check" name="checked" required /> Accept
          policy
        </label> */}
      </form>
    </div>
  );
};

export default Form;
