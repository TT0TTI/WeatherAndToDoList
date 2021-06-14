import { combineReducers } from "redux";
import ReducerWeather from "./reducer_weather";

export default combineReducers({
  weather: ReducerWeather,
});
