import { useNavigate } from "react-router";
import { Movie } from "../../types/common";
import styles from "./MovieCard.module.css";
import { Button } from "..";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigate = useNavigate();

  const handleReadMoreClicked = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} className={styles.poster} />
      <p className={styles.movieTitle}>{movie.title}</p>
      <div className={styles.buttonPosition}>
        <Button onClick={handleReadMoreClicked} type="button">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
