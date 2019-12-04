import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETLISTOFUSERS, GETPROFILE, PATCHUSER } from "../actionTypes";

const url = domain + "/users";

export const getlistofusers = () => dispatch => {
  dispatch({
    type: GETLISTOFUSERS.START
  });

  return fetch(url + "?limit=7", {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETLISTOFUSERS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETLISTOFUSERS.FAIL, payload: err }));
    });
};

export const getProfile = username => dispatch => {
  dispatch({
    type: GETPROFILE.START
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETPROFILE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETPROFILE.FAIL, payload: err }));
    });
};

export const patchUser = (userData, username) => (dispatch, getState) => {
  dispatch({
    type: PATCHUSER.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PATCHUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: PATCHUSER.FAIL, payload: err }));
    });
};