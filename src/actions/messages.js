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

// action type constants
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL = "GET_MESSAGES_FAIL";

export const getMessages = () => dispatch => {
  dispatch({
    type: GET_MESSAGES
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_MESSAGES_FAIL,
          payload: err
        })
      );
    });
};

// action type constants
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAIL = "DELETE_MESSAGE_FAIL";

export const deleteMessage = messageId => (dispatch, getState) => {
  dispatch({
    type: DELETE_MESSAGE
  });
  const { token } = getState().auth.login;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DELETE_MESSAGE_FAIL,
          payload: err
        })
      );
    });
};

// action type constants
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAIL = "CREATE_MESSAGE_FAIL";

export const createMessage = messageData => (dispatch, getState) => {
  dispatch({
    type: CREATE_MESSAGE
  });
  const { token } = getState().auth.login;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_MESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: CREATE_MESSAGE_FAIL,
          payload: err
        })
      );
    });
};
