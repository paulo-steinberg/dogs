import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Route {...props} />;
  else if (!isLogged) return <Navigate to="/login" />;
  else return null;
};
