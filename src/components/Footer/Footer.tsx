import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Made by Jana Milenovská</p>
    </div>
  );
};

export default Footer;
