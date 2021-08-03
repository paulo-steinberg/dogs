import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        <Link to="login" className={styles.login}>
          Login / Create
        </Link>
      </nav>
    </header>
  );
};
