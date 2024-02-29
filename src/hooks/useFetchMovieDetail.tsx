import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface DataType {
  genres: {
    id: number;
    name: string;
  }[];
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  original_language: string;
}

const useFetchMovieDetail = ({
  movieId,
}: {
  movieId: string;
}): {
  data: DataType | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<DataType> = await axios.get(detailUrl);

        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [detailUrl]);

  return { isLoading, data };
};

export default useFetchMovieDetail;
