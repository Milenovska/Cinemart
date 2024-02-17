import { Menu } from "..";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Menu />
    </div>
  );
};

export default Header;
