import { createContext, useReducer, useCallback } from "react";

const initialValues = {
  loggedInUserTokenData: null,
  onSetToken: (token) => {},
};

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
  const [contextValues, dispatch] = useReducer(contextReducer, initialValues);
  console.log(contextValues);

  const setTokenHandler = useCallback((token) => {
    dispatch({ type: "SET_TOKEN", userToken: token });
    localStorage.setItem("tokenData", JSON.stringify(token));
  }, []);

  const values = {
    loggedInUserTokenData: contextValues.loggedInUserTokenData,
    onSetToken: setTokenHandler,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
