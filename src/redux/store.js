import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer";
import Thunk from "redux-thunk";

// export default createStore(rootReducer, {}, applyMiddleware(Thunk));

// Now when my application first boots up we give it an initial state with a value coming from the localstorage
export default createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(Thunk)
);
