import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Welcome from "./pages/welcome";
import Feature from "./pages/feature";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import Signout from "./pages/auth/signout";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        {" "}
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
