import MovieList from "../../hooks/MovieList";
import styles from "./TopRated.module.css";

const TopRated = () => {
  return (
    <div className={styles.topRated}>
      <MovieList />
    </div>
  );
};

export default TopRated;
