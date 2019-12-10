import { push } from "react";
import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  CREATEUSER,
  GETLISTOFUSERS,
  GETPROFILE,
  DELETEUSER,
  PATCHUSER
} from "../actionTypes";
import { login } from "./auth";

const url = domain + "/users";

export const _createUser = values => dispatch => {
  dispatch({
    type: CREATEUSER.START
  });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(values)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: CREATEUSER.FAIL,
          payload: err
        })
      );
    });
};

export const createUser = values => dispatch => {
  return dispatch(_createUser(values)).then(() =>
    dispatch(
      login({
        username: values.username,
        password: values.password
      })
    )
  );
};

export const getlistofusers = () => dispatch => {
  dispatch({
    type: GETLISTOFUSERS.START
  });

  return fetch(url + "?limit=7", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETLISTOFUSERS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETLISTOFUSERS.FAIL, payload: err })
      );
    });
};

export const getProfile = username => dispatch => {
  dispatch({
    type: GETPROFILE.START
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
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

export const deleteUser = () => (dispatch, getState) => {
  dispatch({ type: DELETEUSER.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .then(response => {
      dispatch(push("/"));
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};

export const patchUser = (displayName, about, username) => (
  dispatch,
  getState
) => {
  const token = getState().auth.login.result.token;
  const userData = { displayName, about };

  dispatch({
    type: PATCHUSER.START
  });

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
