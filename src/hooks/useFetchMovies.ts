import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { MOVIE_TYPES, Movie } from "../types/common";

interface FetchMoviesProps {
  page: number;
  type: MOVIE_TYPES;
}

const baseUrl = "https://api.themoviedb.org/3/movie/";

const useFetchMovies = ({ page, type }: FetchMoviesProps) => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<{
          results: Movie[];
          page: number;
          total_pages: number;
          total_results: number;
        }> = await axios.get(baseUrl + `${type}?language=en-US&page=${page}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRhMjRkYTQwYjIwMTZlZjU4MDgzZTQ3ZWJkOGEwMCIsInN1YiI6IjY1Y2E1MWVmOThmMWYxMDE4M2RhYjU4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3fzGvzWCspjDCWrfR8Kx2szQ1MoXKCqh7XRtkje5Huk",
            Accept: "application/json",
          },
        });
        setData((prevState) => {
          if (!prevState) {
            return response.data.results;
          }
          const newMovies = response.data.results.filter(
            (newMovie) =>
              !prevState.some((prevMovie) => prevMovie.id === newMovie.id)
          );
          return [...prevState, ...newMovies];
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoading) fetchMovies();

    return () => {
      setIsLoading(false);
    };
  }, [page, type]);

  return {
    data,
    isLoading,
  };
};

export default useFetchMovies;
