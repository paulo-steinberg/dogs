import { UserHeaderNav } from "../UserHeaderNav/userHeaderNav";
import styles from "./userHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    setTitle(location.pathname.replace("/account/", "").replace("/", ""));
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title upper">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
