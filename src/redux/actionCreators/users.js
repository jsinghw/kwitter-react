import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { CREATEUSER } from "../actionTypes";

const url = domain + "/users";

export const createUser = registerData => dispatch => {
    dispatch({
        type: CREATEUSER.START
    });

    return fetch(url, {
        method: "POST",
        headers: jsonHeaders,
        body: JSON.stringify(registerData)
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