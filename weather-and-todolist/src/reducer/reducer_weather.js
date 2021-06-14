import { FETCH_WEATHER } from "../action";

export default function reducerWeather(state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data;
    default:
      return state;
  }
}
