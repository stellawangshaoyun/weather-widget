import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  weather: any;
  data: any | null;
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: "",
  weather: undefined
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = "";
    },
    fetchWeatherSuccess(state, action: PayloadAction<null>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
