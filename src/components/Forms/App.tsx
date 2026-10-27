import css from "./App.module.css";
import Form from "./Forms/Form";

const App = () => {
  return (
    <div className={css["app"]}>
      <Form />
    </div>
  );
};

export default App;
