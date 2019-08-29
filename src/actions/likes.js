import { domain, handleJsonResponse, jsonHeaders } from "./constants";

const url = domain + "/likes";

// action type constants
export const REMOVE_LIKE = "REMOVE_LIKE";
export const REMOVE_LIKE_SUCCESS = "REMOVE_LIKE_SUCCESS";
export const REMOVE_LIKE_FAIL = "REMOVE_LIKE_FAIL";

export const removeLike = likeId => (dispatch, getState) => {
  dispatch({
    type: REMOVE_LIKE
  });

  const token = getState().auth.login.token;

  return fetch(url + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REMOVE_LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: REMOVE_LIKE_FAIL, payload: err }));
    });
};

export const ADD_LIKE = "ADD_LIKE";
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS";
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL";

export const addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADD_LIKE
  });

  const token = getState().auth.login.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({
      messageId
    })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_LIKE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADD_LIKE_FAIL, payload: err }));
    });
};

export const toggleLike = messageId => (dispatch, getState) => {
  const username = getState().auth.login.username;
  const messages = getState().messages.getMessages;

  const message = messages.find(message => message.id === messageId);
  const like = message.likes.find(like => like.username === username);

  if (like) {
    dispatch(removeLike(like.id));
  } else {
    dispatch(addLike(messageId));
  }
};
