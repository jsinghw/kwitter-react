import { domain, jsonHeaders, handleJsonResponse } from "./constants";

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
