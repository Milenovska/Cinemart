import styles from "./DetailPage.module.css";
import { useParams } from "react-router-dom";
import useFetchMovieDetail from "../../hooks/useFetchMovieDetail";
import { Loading } from "..";
import { MovieLayout } from "../../components";

const DetailPage: React.FC = () => {
  const { movie } = useParams();

  const { data, isLoading } = useFetchMovieDetail({
    movieId: movie ?? "",
  });

  if (!data) return;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  return (
    <MovieLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.detailPage}>
          <div className={styles.movieDetails}>
            <img src={posterUrl} className={styles.poster} />
            <div className={styles.overview}>
              <h1 className={styles.movieName}>{data.title}</h1>
              <p className={styles.overviewInformations}>{data.overview}</p>
              <p className={styles.overviewInformations}>
                Release date: {data.release_date}
              </p>
              <p className={styles.overviewInformations}>
                Vote average: {data.vote_average}
              </p>
              <p className={styles.overviewInformations}>
                Original language: {data.original_language}
              </p>
              <p className={styles.overviewInformations}>
                Genre
                {data.genres
                  .map((genre: { name: string }) => genre.name)
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </MovieLayout>
  );
};
export default DetailPage;
