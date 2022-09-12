import { ADD_JOBS, REMOVE_JOBS } from "../actions";

const initialState = {
  content: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_JOBS:
      return {
        ...state,
        content: state.content.filter((book) => book._id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
