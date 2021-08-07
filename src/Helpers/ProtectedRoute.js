import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to="/login" />;
  else return null;
};
