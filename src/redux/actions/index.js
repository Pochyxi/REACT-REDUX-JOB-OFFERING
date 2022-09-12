export const ADD_JOBS = "ADD_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const GET_JOBS = "GET_JOBS";
export const UPDATE_QUERY = "UPDATE_QUERY";
export const SET_COMPANY_NAME = "SET_COMPANY_NAME";
export const GET_COMPANY_JOBS = "GET_COMPANY_JOBS";

export const addJobs = (data) => {
  return {
    type: ADD_JOBS,
    payload: data,
  };
};

export const removeJobs = (id) => {
  return {
    type: REMOVE_JOBS,
    payload: id,
  };
};

export const getJobs = () => {
  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        baseEndpoint + getState().search.query + "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompanyJobs = () => {
  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        baseEndpoint + getState().search.companyName
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_COMPANY_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
