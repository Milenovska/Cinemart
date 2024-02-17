import { MovieCard } from "../../components";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <MovieCard />
    </div>
  );
};

export default HomePage;
