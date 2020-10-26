import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

export default () => {
  const {
    auth: { authenticated },
  } = useSelector((state) => state);
  const renderLink = () => {
    if (authenticated) {
      return (
        <>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </>
      );
    }
  };
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLink()}
    </div>
  );
};
