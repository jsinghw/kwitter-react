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
export const UPDATEUSER = createActionTypes("UPDATEUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const PUTUSERPICTURE = createActionTypes("PUTUSERPICTURE");

//Messages
export const GETUSERMESSAGES = createActionTypes("GETUSERMESSAGES");
export const POSTMESSAGES = createActionTypes("POSTMESSAGES");
export const DELETEMESSAGES = createActionTypes("DELETEMESSAGES");
export const DELETEPROFILEMESSAGE = createActionTypes("DELETEPROFILEMESSAGE");
