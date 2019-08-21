import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action type constants
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const GET_USER_MESSAGES_FAIL = "GET_USER_MESSAGES_FAIL";

const url = domain + "/messages";

export const getUserMessages = username => dispatch => {
  dispatch({
    type: GET_USER_MESSAGES
  });

  return fetch(url + "?username=" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USER_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_USER_MESSAGES_FAIL,
          payload: err
        })
      );
    });
};

export const getLoggedInUserMessages = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  return dispatch(getUserMessages(username));
};
