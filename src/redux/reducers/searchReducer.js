import {
  GET_COMPANY_JOBS,
  GET_JOBS,
  SET_COMPANY_NAME,
  UPDATE_QUERY,
} from "../actions";

const initialState = {
  content: [],
  query: "",
  companyName: "",
  companyJobs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case SET_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload,
      };
    case GET_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
