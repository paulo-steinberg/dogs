import { Route, Link, Switch } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { LoginCreate } from "../LoginCreate";
import { PasswordLost } from "../PasswordLost";
import { PasswordReset } from "../PasswordReset";

import { useRouteMatch } from "react-router-dom";

export const Login = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <div>
        <h1>Login Component</h1>
        <Link to={`${url}/create`}>Create</Link>
        <Link to={`${url}/lost`}>Lost</Link>
        <Link to={`${url}/reset`}>Reset</Link>
      </div>
      <Switch>
        <Route exact path={`${path}/login`}>
          <LoginForm />
        </Route>
        <Route exact path={`${path}/lost`}>
          <PasswordLost />
        </Route>
        <Route exact path={`${path}/reset`}>
          <PasswordReset />
        </Route>
        <Route exact path={`${path}/create`}>
          <LoginCreate />
        </Route>
      </Switch>
    </>
  );
};
