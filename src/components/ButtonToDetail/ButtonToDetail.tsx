import styles from "./ButtonToDetail.module.css";
import { Link } from "react-router-dom";

const ButtonToDetail = () => {
  return (
    <div className={styles.buttonToDetail}>
      <Link to="/detail/:movie">
        <button>More</button>
      </Link>
    </div>
  );
};

export default ButtonToDetail;
