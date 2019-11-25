import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as listofusers from "./listofusers"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    listofusers: combineReducers(listofusers),
  });
