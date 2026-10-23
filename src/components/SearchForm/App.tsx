import css from "./App.module.css";
import Cars from "./Cars/Cars";

const App = () => {
  return (
    <div className={css["app"]}>
      <Cars />
    </div>
  );
};

export default App;
