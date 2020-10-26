import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

// Dispatch gives us the ability to return as much as actions that we want
// Thunks purpose is to give us total control of the dispatch process
// With redux promise we are still limited to return one single action
export const signup = (formFields, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3090/api/auth/signup",
        formFields
      );
      dispatch({
        type: AUTH_USER,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const signin = (formFields, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3090/api/auth/signin",
        formFields
      );
      dispatch({
        type: AUTH_USER,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email et/ou mot de passe incorrect",
      });
    }
  };
};

export const signout = (callback) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: AUTH_USER,
      payload: "",
    });
    callback();
  };
};
