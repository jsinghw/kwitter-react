import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL
} from "../actions";

const initialState = {
  getUserMessagesLoading: false,
  getUserMessages: [],
  getUserMessagesError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MESSAGES:
      return {
        ...state,
        getUserMessagesLoading: true,
        getUserMessagesError: null
      };
    case GET_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        getUserMessages: action.payload.messages,
        getUserMessagesLoading: false
      };
    case GET_USER_MESSAGES_FAIL:
      return {
        ...state,
        getUserMessagesError: action.payload,
        getUserMessagesLoading: false
      };
    default:
      return state;
  }
};
