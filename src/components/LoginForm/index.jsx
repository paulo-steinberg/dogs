import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Error } from "../../Helpers/Error";
import styles from "./LoginForm.module.css";
import buttonStyles from "../Forms/Button/button.module.css";

export const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { userLogin, error, isLoading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    userLogin(username, password);
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="User"
          type="text"
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button isLoading={isLoading} messageIsNotLoading="Login" />
        <Error error={error} />
      </form>

      <Link className={styles.lost} to="/login/lost">
        Lost your password?
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Not registered yet? Register now!</p>
        <Link className={buttonStyles.button} to="/login/create">
          Register
        </Link>
      </div>
    </section>
  );
};
