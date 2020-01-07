import { DELETEPROFILEMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const deleteProfileMessage = (state = initialState, action) => {
  switch (action.type) {
    case DELETEPROFILEMESSAGE.SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default withAsyncReducer(DELETEPROFILEMESSAGE, deleteProfileMessage);
