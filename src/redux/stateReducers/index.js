import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as listofusers from "./listofusers"
import * as profile from "./profile"
import * as usermessages from "./usermessages"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    listofusers: combineReducers(listofusers),
    profile:combineReducers(profile),
    usermessages: combineReducers(usermessages),
  });
