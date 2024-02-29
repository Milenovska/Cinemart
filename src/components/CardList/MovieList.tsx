import { Button, MovieCard } from "..";
import styles from "./MovieList.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useState } from "react";
import { Loading } from "../../pages";

interface MovieListProps {
  type: "popular" | "now_playing" | "upcoming" | "top_rated";
}

const MovieList: React.FC<MovieListProps> = ({ type }) => {
  const [page, setPage] = useState(1);
  const { data: movies, isLoading } = useFetchMovies(page, type);

  const handleChangePage = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.movieList}>
          {movies?.map((movie, index) => (
            <MovieCard key={`${movie.id}_${index}`} movie={movie} />
          ))}
        </div>
      </section>
      <div className={styles.paginatorPosition}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.paginationButton}>
            <Button type="button" onClick={handleChangePage}>
              Show more movies
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
