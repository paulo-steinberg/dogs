import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { ReactComponent as MyPictures } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";
import styles from "./userHeaderNav.module.css";
import { useMedia } from "../../Hooks/useMedia";

export const UserHeaderNav = () => {
  const { userLogOut } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathName } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathName]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        />
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <MyPictures />
          {mobile && "My Pictures"}
        </NavLink>
        <NavLink to="/account/stats" activeClassName={styles.active}>
          <Stats />
          {mobile && "Stats"}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhoto />
          {mobile && "Add Photo"}
        </NavLink>
        <button onClick={userLogOut}>
          <Exit />
          {mobile && "Log Out"}
        </button>
      </nav>
    </>
  );
};
