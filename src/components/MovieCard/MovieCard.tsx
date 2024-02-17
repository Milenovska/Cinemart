import ButtonToDetail from "../ButtonToDetail/ButtonToDetail";
import styles from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.movieCard}>
      <p>Name</p>
      <ButtonToDetail />
    </div>
  );
};

export default MovieCard;
