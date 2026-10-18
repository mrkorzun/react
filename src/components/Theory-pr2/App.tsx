import css from "./App.module.css";
import Counter from "./Counter/Counter";

const App = () => {
  return (
    <div className={css["page"]}>
      <Counter />
    </div>
  );
};

export default App;
