import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const state = useSelector((state) => state);
  return <h3>Welcome!Sign up or Sign in!</h3>;
};
