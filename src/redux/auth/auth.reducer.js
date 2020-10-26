import { AUTH_USER, AUTH_ERROR, AUTH_LOADING } from "./types";

const initialState = {
  authenticated: "",
  errorMessage: "",
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case AUTH_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
