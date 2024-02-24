import MovieList from "../../hooks/MovieList";
import styles from "./Popular.module.css";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <MovieList />
    </div>
  );
};

export default Popular;
