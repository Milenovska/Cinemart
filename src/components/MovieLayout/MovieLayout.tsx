import styles from "./MovieLayout.module.css";

interface MovieLayerProps {
  children: React.ReactNode;
}

const MovieLayout: React.FC<MovieLayerProps> = ({ children }) => {
  return <div className={styles.movieLayout}>{children}</div>;
};

export default MovieLayout;
