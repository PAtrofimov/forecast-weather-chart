import axios from "axios";
import {
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
} from "./forecastTypes";

export const getForecast = (city) => {
  return (dispatch) => {
    let message;
    if (city) {
      dispatch(getForecastRequest());
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bad46dfee1ae1125ec4faf31e63449de`
        )
        .then((response) => {
          const data = response.data.list.map((it) => {
            return {
              name: it.dt_txt,
              temp: it.main.temp,
            };
          });

          dispatch(getForecastSuccess({ search: city, data }));
        })
        .catch((error) => {
          if (error.response.status === 404) {
            message = "City not found";
          } else {
            message = error.message;
          }

          dispatch(getForecastFailure(message));
        });
    } else {
      message = "Nothing was searched";
      dispatch(getForecastFailure(message));
    }
  };
};

export const getForecastRequest = () => {
  return {
    type: GET_FORECAST_REQUEST,
  };
};

export const getForecastSuccess = (data) => {
  return {
    type: GET_FORECAST_SUCCESS,
    payload: data,
  };
};

export const getForecastFailure = (error) => {
  return {
    type: GET_FORECAST_FAILURE,
    payload: error,
  };
};
