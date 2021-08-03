import { LoginCreate } from "../LoginCreate";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    api
      .post("jwt-auth/v1/token", { username, password })
      .then((res) => console.log(res.data.token));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Send</button>
      </form>

      <Link to="/login/create">
        <LoginCreate />
      </Link>
    </section>
  );
};
