import { useNavigate } from "react-router-dom";
import styles from "./SearchField.module.css";
import { useState } from "react";

const SearchField: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleSearch = (value: string | null) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        className={styles.searchField}
        placeholder="Find movie"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/search/${searchTerm}`);
        }}
      />
    </div>
  );
};

export default SearchField;
