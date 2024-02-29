import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../../pages";
import { useParams } from "react-router-dom";
import { Movie } from "../../types/common";
import styles from "./SearchResults.module.css";
import MovieLayout from "../MovieLayout/MovieLayout";
import { MovieCard } from "..";

const SearchResults: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<Movie[] | null>(null);

  const { value } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query: value,
            },
          }
        );
        setSearchData(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (value) {
      fetchSearchResults();
    } else {
      setSearchData(null);
    }
  }, [value]);

  return (
    <MovieLayout>
      <p className={styles.searchResultsText}>Search results for: {value}</p>
      <div className={styles.searchResultsContainer}>
        {isLoading ? (
          <Loading />
        ) : searchData ? (
          <div className={styles.resultsContainer}>
            {searchData.map((movie, index) => (
              <MovieCard key={`${movie.id}_${index}`} movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <p className={styles.noResultsText}>No search results found.</p>
          </div>
        )}
      </div>
    </MovieLayout>
  );
};

export default SearchResults;
