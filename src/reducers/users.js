import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from "../actions";

const initialState = {
  getUserLoading: false,
  getUser: {},
  getUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: action.payload.user,
        getUserLoading: false
      };
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      };
    default:
      return state;
  }
};
