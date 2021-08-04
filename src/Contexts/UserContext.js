import { createContext, useState } from "react";
import { GET_USER, LOGIN } from "../services/api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function getUser(token) {
    try {
      const { data } = await GET_USER(token);
      setData(data);
      setIsLogged(true);

      console.log("Context: ", data);
    } catch (error) {
      console.error(error);
    }
  }

  async function userLogin(username, password) {
    try {
      const response = await LOGIN(username, password);
      if (response.data.token) {
        window.localStorage.setItem("token", response.data.token);
        const jota = await getUser(response.data.token);
        console.log(jota);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const contextData = {
    userLogin,
    data,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};
