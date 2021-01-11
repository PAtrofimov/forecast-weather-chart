// reducers.js
import { combineReducers } from "redux";
import forecastReducer from "./forecast/forecastReducer";

const createRootReducer = () =>
  combineReducers({
    forecast: forecastReducer
  });
export default createRootReducer;
