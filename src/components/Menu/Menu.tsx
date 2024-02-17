import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { SearchField } from "..";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <p>
        <Link to="/">Homepage</Link>
      </p>
      <p>
        <Link to="/topRated">Top Rated</Link>
      </p>
      <p>
        <Link to="/popular">Popular</Link>
      </p>
      <p>
        <Link to="/upcoming">UPcoming</Link>
      </p>
      <SearchField />
    </div>
  );
};

export default Menu;
