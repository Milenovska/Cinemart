import styles from "./DetailPage.module.css";
import { Movie } from "../../types/common";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const { state } = useLocation();
  const movie: Movie = state;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const url =
    "https://api.themoviedb.org/3/discover/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg";

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhMjRkYTQwYjIwMTZlZjU4MDgzZTQ3ZWJkOGEwMCIsInN1YiI6IjY1Y2E1MWVmOThmMWYxMDE4M2RhYjU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fzGvzWCspjDCWrfR8Kx2szQ1MoXKCqh7XRtkje5Huk",
          Accept: "application/json",
        },
      });

      console.log(response);
    };

    fetch();
  }, []);

  return (
    <div className={styles.detailPage}>
      <h1>{movie.title}</h1>
      <img src={posterUrl} />
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.original_language}</p>
    </div>
  );
};
export default DetailPage;
