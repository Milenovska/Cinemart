import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/common";

const useFetchMovies = (
  page: number,
  type: "popular" | "now_playing" | "upcoming" | "top_rated"
) => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);

        const response: AxiosResponse<{
          results: Movie[];
          page: number;
          total_pages: number;
          total_results: number;
        }> = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`
        );

        if (!data) {
          setData(response.data.results);
          return;
        }

        if (page == 1) {
          setData(response.data.results);
          return;
        }

        setData((prevState) => [
          ...(prevState ?? []),
          ...response.data.results,
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    return;
  }, [page]);

  return {
    data,
    isLoading,
  };
};

export default useFetchMovies;
