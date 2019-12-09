import { create } from "domain";

const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

//Auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
//Users
export const GETLISTOFUSERS = createActionTypes("GETLISTOFUSERS");
export const GETPROFILE = createActionTypes("GETPROFILE");
export const CREATEUSER = createActionTypes("CREATEUSER");
export const PATCHUSER = createActionTypes("PATCHUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
//Messages
export const GETUSERMESSAGES = createActionTypes("GETUSERMESSAGES");
export const POSTMESSAGES = createActionTypes("POSTMESSAGES");
