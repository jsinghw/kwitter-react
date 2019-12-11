import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { ADDLIKE, DELETELIKE } from "../actionTypes";

const url = domain + "/likes";

export const addLike = messageID => (dispatch, getState) => {
  dispatch({ type: ADDLIKE.START });

  const { token } = getState().auth.login.result;

  return fetch(url + "/" + messageID, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageID)
  })
    .then(console.log(messageID))
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

// export const deleteLike = messageID => (dispatch, getState) => {
//   dispatch({ type: DELETELIKE.START });

//   const { token } = getState().auth.login.result;

//   return fetch(url + "/" + messageID, {
//     method: "DELETE",
//     headers: { Authorization: "Bearer " + token, ...jsonHeaders }
//   })
//     .then(console.log(messageID))
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: DELETELIKE.SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(dispatch({ type: DELETELIKE.FAIL, payload: err }));
//     });
// };
