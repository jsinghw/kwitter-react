const initialState = {
  result: null,
  loading: false,
  error: null
};

const withAsyncReducer = ({ START, SUCCESS, FAIL }, reducer) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case SUCCESS:
        return {
          ...state,
          loading: false,
          result: action.payload
        };
      case FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return reducer(state, action);
    }
  };
};

export default withAsyncReducer;
