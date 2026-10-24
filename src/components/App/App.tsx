import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import MovieModal from "../MovieModal/MovieModal";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css["app"]}>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <MovieGrid />
      {/* <MovieModal /> */}
    </div>
  );
};

export default App;
