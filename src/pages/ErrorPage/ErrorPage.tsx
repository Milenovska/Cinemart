import styles from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Page not exist</h1>
    </div>
  );
};

export default ErrorPage;
