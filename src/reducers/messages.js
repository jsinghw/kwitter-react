import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  LOGOUT_SUCCESS,
  GET_MESSAGES,
  GET_MESSAGES_FAIL,
  GET_MESSAGES_SUCCESS
} from "../actions";

const initialState = {
  getUserMessagesLoading: false,
  getUserMessages: [],
  getUserMessagesError: null,
  getMessagesLoading: false,
  getMessages: [],
  getMessagesError: null
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
    case GET_MESSAGES:
      return {
        ...state,
        getMessagesLoading: true,
        getMessagesError: null
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        getMessagesLoading: false,
        getMessages: action.payload.messages
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        getMessagesLoading: false,
        getMessagesError: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
