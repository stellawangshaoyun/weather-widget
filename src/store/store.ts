import { configureStore } from "@reduxjs/toolkit";
import weatherReducer, { WeatherState } from "./weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
export type RootState = WeatherState;
export type AppDispatch = typeof store.dispatch;
export default store;
