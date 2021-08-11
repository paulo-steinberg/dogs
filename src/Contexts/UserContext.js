import { createContext, useCallback, useEffect, useState } from "react";
import { GET_USER, LOGIN, VALIDATE_TOKEN } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function getUser(token) {
    try {
      const { data } = await GET_USER(token);
      setData(data);
      setIsLogged(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setIsLoading(true);
      const response = await LOGIN(username, password);

      if (!response.status === 200)
        throw new Error(`Erorr: ${response.statusText}`);

      if (response.data?.token) {
        window.localStorage.setItem("token", response.data.token);
        await getUser(response.data.token);
        navigate("/account");
      }
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  }

  const userLogOut = useCallback(
    async function () {
      setData(null);
      setError(null);
      setIsLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const response = await VALIDATE_TOKEN(token);
          console.log(response);
          const status = response.status;
          if (status !== 200) console.error("Invalid Token");

          await getUser(token);
        } catch (error) {
          await userLogOut();
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLogged(false);
      }
    }

    autoLogin();
  }, [userLogOut]);

  const contextData = {
    userLogin,
    userLogOut,
    error,
    isLoading,
    isLogged,
    data,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};
