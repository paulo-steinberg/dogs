import { LoginCreate } from "../LoginCreate";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    userLogin(username, password);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <Button>Log in</Button>
      </form>

      <Link to="/login/create">
        <LoginCreate />
      </Link>
    </section>
  );
};
