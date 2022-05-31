import { createContext, useReducer, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  loggedInUserTokenData: null,
  onSetToken: (token) => {},
  logout: () => {},
};

const initialReducerValues ={
  loggedInUserTokenData: null,
}

const contextReducer = (_, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { loggedInUserTokenData: action.userToken };
    default:
      throw new Error("Something went wrong");
  }
};

export const AppContext = createContext(initialValues);

const AppContextProvider = ({ children }) => {
  const [contextValues, dispatch] = useReducer(contextReducer, initialReducerValues);
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("tokenData");

  const setTokenHandler = useCallback((token) => {
    dispatch({ type: "SET_TOKEN", userToken: token });
    localStorage.setItem("tokenData", JSON.stringify(token));
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("tokenData");
    navigate("/");
  };

  const values = {
    loggedInUserTokenData: JSON.parse(storedToken),
    onSetToken: setTokenHandler,
    logout: logoutHandler,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
