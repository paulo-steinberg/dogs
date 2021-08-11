import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import styles from "./header.module.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const Header = () => {
  const { data, userLogOut } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>

        {data ? (
          <>
            <Link to="account" className={styles.login}>
              {data.nome}
            </Link>
          </>
        ) : (
          <Link to="login" className={styles.login}>
            Login / Create
          </Link>
        )}
      </nav>
    </header>
  );
};
