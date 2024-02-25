import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import { SearchField } from "..";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.links}>
        <p>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.visitedLink} ${styles.link}`
            }
            to="/"
          >
            Now playing
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.visitedLink} ${styles.link}`
            }
            to="/topRated"
          >
            Top Rated
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.visitedLink} ${styles.link}`
            }
            to="/popular"
          >
            Popular
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              `${isActive && styles.visitedLink} ${styles.link}`
            }
            to="/upcoming"
          >
            Upcoming
          </NavLink>
        </p>
      </div>
      <SearchField />
    </div>
  );
};

export default Menu;
