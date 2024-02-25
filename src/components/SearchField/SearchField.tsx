import { useEffect, useState } from "react";
import styles from "./SearchField.module.css";
import { Movie } from "../../types/common";
import { DetailPage } from "../../pages";

const SearchField: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovie, setSearchMovie] = useState<string>("");

  // Fetch logic here
  useEffect(() => {
    try {
      setMovies(movies);
    } catch (error) {
      console.log("error");
    }
  });

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div className={styles.seachFieldContainer}>
      <input
        onChange={(e) => setSearchMovie(e.target.value)}
        className={styles.searchField}
        placeholder="Find movie"
      />
      <div>
        {filteredMovies.map((movie) => (
          <DetailPage key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchField;
