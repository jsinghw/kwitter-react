import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSERMESSAGES } from "../actionTypes";

const url = domain + "/messages?limit=10";

export const getUserMessages = username => dispatch => {
    dispatch({
      type: GETUSERMESSAGES.START
    });
  
    const endpointUrl = username ? url + "&username=" + username : url;

    return fetch(endpointUrl, {
      method: "GET",
      headers: jsonHeaders,
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: GETUSERMESSAGES.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: GETUSERMESSAGES.FAIL, payload: err }));
      });
  };