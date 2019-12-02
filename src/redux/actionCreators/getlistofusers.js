import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETLISTOFUSERS } from "../actionTypes";

const url = domain + "/users?limit=7";

export const getlistofusers = () => dispatch => {
  dispatch({
    type: GETLISTOFUSERS.START
  });

  return fetch(url, {
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