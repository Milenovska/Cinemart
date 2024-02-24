import MovieList from "../../hooks/MovieList";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  return (
    <div className={styles.upcoming}>
      <MovieList />
    </div>
  );
};

export default Upcoming;
