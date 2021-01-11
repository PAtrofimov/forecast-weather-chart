import {
  GET_FORECAST_FAILURE,
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS,
} from "./forecastTypes";

const initialState = {
  loading: false,
  search: "",
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FORECAST_SUCCESS: {
      const { data, search } = action.payload;
      return { ...state, loading: false, data, search, error: "" };
    }
    case GET_FORECAST_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

export default reducer;
