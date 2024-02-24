import { Movie } from "../../types/common";
import ButtonToDetail from "../Buttons/ButtonToDetail/ButtonToDetail";
import styles from "./MovieCard.module.css";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} className={styles.poster} />
      <p className={styles.movieTitle}>{movie.title}</p>
      <div className={styles.buttonPosition}>
        <ButtonToDetail movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
