import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import { AppName, SearchField } from "..";

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.linksContainer}>
        <p className={styles.menuText}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.menuLink} ${
                isActive ? styles.menuLinkVisited : styles.menuLinkNotVisited
              }`
            }
          >
            Now playing
          </NavLink>
        </p>
        <p className={styles.menuText}>
          <NavLink
            to="/topRated"
            className={({ isActive }) =>
              `${styles.menuLink} ${
                isActive ? styles.menuLinkVisited : styles.menuLinkNotVisited
              }`
            }
          >
            Top Rated
          </NavLink>
        </p>
        <p className={styles.menuText}>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              `${styles.menuLink} ${
                isActive ? styles.menuLinkVisited : styles.menuLinkNotVisited
              }`
            }
          >
            Popular
          </NavLink>
        </p>
        <p className={styles.menuText}>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              `${styles.menuLink} ${
                isActive ? styles.menuLinkVisited : styles.menuLinkNotVisited
              }`
            }
          >
            Upcoming
          </NavLink>
        </p>
      </div>

      <AppName />
      <SearchField />
    </div>
  );
};

export default Menu;
