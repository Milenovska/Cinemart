import MovieList from "../../hooks/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <MovieList />
    </div>
  );
};

export default HomePage;
