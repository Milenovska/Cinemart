import { MovieCard } from "../components";
import { Movie } from "../types/common";
import styles from "./MovieList.module.css";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response: AxiosResponse<{
          results: Movie[];
          page: number;
          total_pages: number;
          total_results: number;
        }> = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhMjRkYTQwYjIwMTZlZjU4MDgzZTQ3ZWJkOGEwMCIsInN1YiI6IjY1Y2E1MWVmOThmMWYxMDE4M2RhYjU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fzGvzWCspjDCWrfR8Kx2szQ1MoXKCqh7XRtkje5Huk",
              Accept: "application/json",
            },
          }
        );
        setMovies((prevState) => [...prevState, ...response.data.results]);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();

    return;
  }, [page]);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <div className={styles.paginatorPosition}>
        <button
          className={styles.paginationButton}
          onClick={() => {
            setPage((prevPage) => (prevPage += 1));
          }}
        >
          20 more
        </button>
      </div>
    </div>
  );
};

export default MovieList;
