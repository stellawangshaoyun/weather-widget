import React, { useCallback, useEffect, useRef, useState } from "react";
import fetchWeather from "../api/weatherService";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../store/weatherSlice";
import { RootState } from "../store/store";
import { CityInput } from "./CityInput";
const WeatherWidget = () => {
  const [location, setLocation] = useState<string>(""); // Default location
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const fetchData = async () => {
    if (!location) {
      return; // Do not fetch if location is empty
    }
    dispatch(fetchWeatherStart());
    try {
      const data = await fetchWeather(location);
      dispatch(fetchWeatherSuccess(data));
    } catch (error) {
      dispatch(fetchWeatherFailure("cannot find this place"));
    }
  };
  const debouncedFetchData = useCallback(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      fetchData();
    }, 500);
  }, [fetchData]);

  useEffect(() => {
    debouncedFetchData();
  }, [dispatch, location]);

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-min mx-auto bg-white rounded-lg shadow-md p-4 space-y-4">
        <CityInput value={location} onChange={handleLocationChange}/>
        {loading && <p className="mt-2 text-center">Loading...</p>}
        {location !== "" && error && (
          <p className="mt-2 text-red-500">{error}</p>
        )}
        {weatherData && !error && !loading && location !== "" && (
          <div className="p-5 bg-gradient-to-b from-blue-800 to-blue-400  text-white rounded-md flex justify-between">
            <div>
              <p className="text-sm font-medium tracking-wider mb-1 uppercase">
                {location}
              </p>
              <p className="text-4xl font-bold my-2">
                {Math.round(weatherData.main.temp)} °
              </p>
              <div className="flex space-x-2">
                <p className="text-sm">
                  H : {Math.round(weatherData.main.temp_max)}
                </p>
                <p className="text-sm">
                  L : {Math.round(weatherData.main.temp_min)}
                </p>
              </div>
            </div>
            <div className="grid place-content-center">
              <img
                alt="Weather icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                className="mx-auto w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
