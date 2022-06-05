import { useReducer, useCallback, useContext } from "react";
import axios from "axios";
import { AppContext } from "../store/appContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const useHttpReducer = (_, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { loading: false, error: null, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    default:
      throw new Error("Something went wrong!");
  }
};

export const useHttp = () => {
  const [httpState, dispatch] = useReducer(useHttpReducer, initialState);
  const { loggedInUserTokenData } = useContext(AppContext);
  const headers = {
    headers: { Authorization: `Bearer ${loggedInUserTokenData?.access}` },
  };

  const sendRequest = useCallback(
    async (method = "GET", specificUrl = "", body = {}) => {
      // GET request
      if (method === "GET") {
        try {
          dispatch({ type: "SEND" });
          const response = await axios.get(
            `${BASE_URL}${specificUrl}`,
            headers
          );
          dispatch({ type: "RESPONSE", responseData: response.data });
        } catch (error) {
          dispatch({ type: "ERROR", errorMessage: error.message });
        }
      }

      // POST request
      if (method === "POST") {
        try {
          dispatch({ type: "SEND" });
          const response = await axios.post(
            `${BASE_URL}${specificUrl}`,
            body,
            headers
          );
          dispatch({ type: "RESPONSE", responseData: response.data });
        } catch (error) {
          console.log(error);
          dispatch({ type: "ERROR", errorMessage: error.message });
        }
      }
    },
    []
  );

  return {
    data: httpState.data,
    error: httpState.error,
    loading: httpState.loading,
    sendRequest,
  };
};
