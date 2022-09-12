import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers/jobReducer";
import searchReducer from "../reducers/searchReducer";

const mergedReducers = combineReducers({
  jobs: mainReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: mergedReducers,
});

export default store;
