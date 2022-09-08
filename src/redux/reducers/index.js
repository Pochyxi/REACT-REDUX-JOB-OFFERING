const initialState = {
  jobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };
    case "REMOVE_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: state.jobs.content.filter(
            (book) => book._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
