import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSERMESSAGES, POSTMESSAGES } from "../actionTypes";

const url = domain + "/messages";

export const getUserMessages = username => dispatch => {
  dispatch({
    type: GETUSERMESSAGES.START
  });

  const endpointUrl = username ? url + "?limit=10&username=" + username : url;

  return fetch(endpointUrl, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSERMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETUSERMESSAGES.FAIL, payload: err })
      );
    });
};

const _PostMessages = messageBody => (dispatch, getState) => {
  dispatch({
    type: POSTMESSAGES.START
  });
  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageBody)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      if (err.statusCode === 401) {
        return dispatch({
          type: POSTMESSAGES.SUCCESS,
          payload: { statusCode: 200 }
        });
      }
      return Promise.reject(
        dispatch({ type: POSTMESSAGES.FAIL, payload: err.message })
      );
    });
};
export const PostMessages = messageBody => (dispatch, getState) => {
  return dispatch(_PostMessages(messageBody)).then(() => {
    return dispatch(getUserMessages());
  });
};
