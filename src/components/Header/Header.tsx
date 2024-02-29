import { Menu } from "..";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Menu />
    </div>
  );
};

export default Header;
