import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { getLoggedInUserMessages, getUserMessages } from "./messages";
import { push } from "connected-react-router";

// action type constants
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

const url = domain + "/users";

// action creator functions
export const getUser = username => dispatch => {
  dispatch({
    type: GET_USER
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: GET_USER_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GET_USER_FAIL, payload: err }));
    });
};

export const getLoggedInUser = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  return dispatch(getUser(username));
};

export const getLoggedInUserProfileInfo = () => dispatch => {
  return dispatch(getLoggedInUser()).then(() =>
    dispatch(getLoggedInUserMessages())
  );
};

export const getUserProfileInfo = username => dispatch => {
  return dispatch(getUser(username)).then(() =>
    dispatch(getUserMessages(username))
  );
};

// action type constants
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const registerUser = registerData => dispatch => {
  dispatch({
    type: REGISTER_USER
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: REGISTER_USER_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: err
        })
      );
    });
};

export const registerUserThenGoToHomepage = registerData => dispatch => {
  return dispatch(registerUser(registerData)).then(() => dispatch(push("/")));
};

// action type constants
export const UPLOAD_USER_PICTURE = "UPLOAD_USER_PICTURE";
export const UPLOAD_USER_PICTURE_SUCCESS = "UPLOAD_USER_PICTURE_SUCCESS";
export const UPLOAD_USER_PICTURE_FAIL = "UPLOAD_USER_PICTURE_FAIL";

export const uploadUserPicture = formData => (dispatch, getState) => {
  dispatch({
    type: UPLOAD_USER_PICTURE
  });

  const { username, token } = getState().auth.login;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPLOAD_USER_PICTURE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPLOAD_USER_PICTURE_FAIL,
          payload: err
        })
      );
    });
};

export const uploadUserPictureThenGetLoggedInUser = formData => dispatch => {
  return dispatch(uploadUserPicture(formData)).then(() =>
    dispatch(getLoggedInUser())
  );
};

// action type constants
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const updateUser = updateUserData => (dispatch, getState) => {
  dispatch({
    type: UPDATE_USER
  });

  const { username, token } = getState().auth.login;

  const newUpdateUserData = {};
  if (updateUserData.password !== "") {
    newUpdateUserData.password = updateUserData.password;
  }
  if (updateUserData.displayName !== "") {
    newUpdateUserData.displayName = updateUserData.displayName;
  }

  if (updateUserData.about !== "") {
    newUpdateUserData.about = updateUserData.about;
  }

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(newUpdateUserData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: err
        })
      );
    });
};

// action type constants
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_USER
  });

  const { username, token } = getState().auth.login;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DELETE_USER_FAIL,
          payload: err
        })
      );
    });
};
