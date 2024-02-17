import styles from "./SearchField.module.css";

const SearchField = () => {
  return (
    <div>
      <input className={styles.searchField} placeholder="Find movie" />
    </div>
  );
};

export default SearchField;
