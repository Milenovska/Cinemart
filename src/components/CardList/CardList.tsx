import useFetchMovies from "../../hooks/useFetchMovies";
import { FC, useState } from "react";
import { MovieCard } from "../../components";
import styles from "./CardList.module.css";
import { MOVIE_TYPES } from "../../types/common";

interface CardListProps {
  type: MOVIE_TYPES;
}

const CardList: FC<CardListProps> = ({ type }) => {
  const [page, setPage] = useState(1);
  const { data } = useFetchMovies({
    page,
    type,
  });
  return (
    <div className={styles.cardList}>
      <section className={styles.section}>
        <div className={styles.movieList}>
          {data &&
            data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
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

export default CardList;
