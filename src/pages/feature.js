import React from "react";
import requireAuth from "./require.auth";
import { useSelector } from "react-redux";

const Feature = () => {
  const {
    auth: { authenticated },
  } = useSelector((state) => state);
  return <h3> Your auth token is : {authenticated}</h3>;
};

export default requireAuth(Feature);
