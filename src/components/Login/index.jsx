import { Route, Routes, Navigate } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { LoginCreate } from "../LoginCreate/loginCreate";
import { PasswordLost } from "../PasswordLost";
import { PasswordReset } from "../PasswordReset";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import styles from "./login.module.css";

export const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<PasswordLost />} />
          <Route path="reset" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};
