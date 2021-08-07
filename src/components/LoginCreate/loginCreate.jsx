import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useContext, useState } from "react";
import { CREATE_USER } from "../../services/api";
import { UserContext } from "../../Contexts/UserContext";
import { Error } from "../../Helpers/Error";

export const LoginCreate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { userLogin, isLoading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await CREATE_USER(username, email, password);
      if (response.status === 200) userLogin(username, password);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="User"
          type="text"
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          isLoading={isLoading}
          messageIsLoading="Registering..."
          messageIsNotLoading="Register"
        />
      </form>
      <Error error={error} />
    </section>
  );
};
