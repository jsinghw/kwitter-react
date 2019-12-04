import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { CREATEUSER } from "../actionTypes";
import { login } from "./auth";

const url = domain + "/users";

export const createUser = values => dispatch => {
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

// export const createUserThenLogin = registerData => dispatch => {
//     return dispatch(createUser(registerData)).then(() => 
//         dispatch(
//             login({ 
//                 username: registerData.username, 
//                 password: registerData.password
//             })
//         )
//     );
// };