import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.siteName}>
        <a href="/">My Site</a>
      </h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="#">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Works</a>
        </li>
      </ul>
      <div className={styles.social}>
        <a href="https://github.com/mottox2" target="_blank" rel="noreferrer">
          <img width={32} height={32} alt="GitHub" src="/GitHub.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
