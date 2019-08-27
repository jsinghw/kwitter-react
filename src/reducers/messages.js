import {
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  LOGOUT_SUCCESS,
  GET_MESSAGES,
  GET_MESSAGES_FAIL,
  GET_MESSAGES_SUCCESS,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL
} from "../actions";

const initialState = {
  getUserMessagesLoading: false,
  getUserMessages: [],
  getUserMessagesError: null,
  getMessagesLoading: false,
  getMessages: [],
  getMessagesError: null,
  deleteMessageLoading: false,
  deleteMessageError: null,
  createMessageLoading: false,
  createMessageError: null
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
    case DELETE_MESSAGE:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: null
      };
    case DELETE_MESSAGE_SUCCESS:
      const messageIdToDelete = action.payload.id;
      const callback = message => message.id !== messageIdToDelete;
      return {
        ...state,
        deleteMessageLoading: true,
        getMessages: state.getMessages.filter(callback),
        getUserMessages: state.getUserMessages.filter(callback)
      };
    case DELETE_MESSAGE_FAIL:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: action.payload
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        createMessageLoading: true,
        createMessageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        createMessageLoading: false,
        getUserMessages: [action.payload.message, ...state.getUserMessages],
        getMessages: [action.payload.message, ...state.getMessages]
      };
    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        createMessageLoading: false,
        createMessageError: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
