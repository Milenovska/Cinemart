import styles from "./DetailPage.module.css";
import { Movie } from "../../types/common";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const { state } = useLocation();
  const movie: Movie = state;
  const [genres, setGenres] = useState<string[]>([]);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const url = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhMjRkYTQwYjIwMTZlZjU4MDgzZTQ3ZWJkOGEwMCIsInN1YiI6IjY1Y2E1MWVmOThmMWYxMDE4M2RhYjU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fzGvzWCspjDCWrfR8Kx2szQ1MoXKCqh7XRtkje5Huk",
            Accept: "application/json",
          },
        });
        const fetchedGenres: string[] = response.data.genres.map(
          (genre: { name: string }) => genre.name
        );
        setGenres(fetchedGenres);
        console.log(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [url]);

  return (
    <div className={styles.detailPageContainer}>
      <img src={posterUrl} className={styles.poster} alt={movie.title} />
      <h1 className={styles.title}>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Original language: {movie.original_language}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Genres: {genres.join(", ")}</p>
      <p>Rating: {movie.vote_average} points</p>
    </div>
  );
};
export default DetailPage;
