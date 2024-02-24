import { FC } from "react";
import styles from "./ButtonToDetail.module.css";
import { Link } from "react-router-dom";
import { Movie } from "../../../types/common";

interface ButtonToDetailProps {
  movie: Movie;
}

const ButtonToDetail: FC<ButtonToDetailProps> = ({ movie }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link to={`/detail/${movie.id}`} state={movie}>
        <button className={styles.buttonToDetail}>
          <p>More</p>
        </button>
      </Link>
    </div>
  );
};

export default ButtonToDetail;
