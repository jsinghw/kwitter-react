import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as profile from "./profile"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    profile:combineReducers(profile),
  });
