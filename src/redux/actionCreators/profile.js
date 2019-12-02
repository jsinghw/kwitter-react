import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETPROFILE } from "../actionTypes";

const url = domain + "/users";

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