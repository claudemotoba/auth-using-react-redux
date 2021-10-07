import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default (ChildComponent) => {
  function ComposedComponent(props) {
    const { auth } = useSelector((state) => state);
    function shouldNavigateAway() {
      if (!auth.authenticated) props.history.push("/");
    }
    useEffect(() => {
      shouldNavigateAway();
    }, [shouldNavigateAway]);
    return <ChildComponent {...props} />;
  }
  return ComposedComponent;
};