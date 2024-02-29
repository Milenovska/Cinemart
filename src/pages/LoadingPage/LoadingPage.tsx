import styles from "./LoadingPage.module.css";
import { Oval } from "react-loader-spinner";

interface LoadingProps {
  width?: "sm" | "md" | "lg";
}

const Loading: React.FC<LoadingProps> = ({ width = "sm" }) => {
  const getWidth = () => {
    switch (width) {
      case "sm":
        return 50;
      case "md":
        return 100;
      case "lg":
        return 150;
      default:
        return 50;
    }
  };

  return (
    <div className={styles.loading}>
      <h1 className={styles.loadingText}>Loading</h1>
      <div className={styles.loader}>
        <Oval color="white" secondaryColor="grey" width={getWidth()} />
      </div>
    </div>
  );
};

export default Loading;
