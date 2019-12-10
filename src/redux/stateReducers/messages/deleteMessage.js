import { DELETEMESSAGES }  from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const deleteMessage = (state = initialState, action) => {
  switch (action.type) {
    case DELETEMESSAGES.SUCCESS:
      return {...initialState}
    default:
      return state;
  }
};

export default withAsyncReducer(DELETEMESSAGES, deleteMessage);