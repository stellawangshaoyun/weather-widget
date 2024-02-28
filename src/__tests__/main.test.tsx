import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import WeatherWidget from "../components/WeatherWidget";
import fetchWeather from "../api/weatherService";
import configureStore from "redux-mock-store";
import { RootState } from "../store/store";

jest.mock("../api/weatherService");
describe("WeatherWidget", () => {
  const mockStore = configureStore<RootState>();
  let store: any;

  test("renders WeatherWidget component", () => {
    store = mockStore({
      weather: {
        data: null,
        loading: false,
        error: null,
      },
    });
    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>,
    );

    // Check if the input field is rendered
    const inputElement = screen.getByPlaceholderText("Weather in your city");
    expect(inputElement).toBeDefined();
  });

  test("fetches weather data and displays it when location is provided", async () => {
    // Mock the fetchWeather function to return a sample weather data
    const mockWeatherData = {
      main: { temp: 25, temp_max: 30, temp_min: 20 },
      weather: [{ icon: "01d" }],
    };
    store = mockStore({
      weather: {
        data: mockWeatherData,
        loading: false,
        error: null,
      },
    });
    (
      fetchWeather as jest.MockedFunction<typeof fetchWeather>
    ).mockResolvedValueOnce(mockWeatherData);

    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>,
    );

    // Simulate user input
    const inputElement = screen.getByPlaceholderText("Weather in your city");
    fireEvent.change(inputElement, { target: { value: "London" } });

    // Wait for the weather data to be displayed
    await screen.findByText("London");

    // Check if the weather data is displayed correctly
    expect(screen.getByText("25 °")).toBeDefined();
    expect(screen.getByText("H : 30")).toBeDefined();
    expect(screen.getByText("L : 20")).toBeDefined();
    expect(screen.getByAltText("Weather icon")).toBeDefined();
  });

  test("error message", async () => {
    store = mockStore({
      weather: {
        data: null,
        loading: false,
        error: "cannot find this place",
      },
    });
    (
      fetchWeather as jest.MockedFunction<typeof fetchWeather>
    ).mockResolvedValueOnce(null);

    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>,
    );
    await screen.findByText("cannot find this place");
  });

  test("loading state", async () => {
    store = mockStore({
      weather: {
        data: null,
        loading: true,
        error: "",
      },
    });
    (
      fetchWeather as jest.MockedFunction<typeof fetchWeather>
    ).mockResolvedValueOnce(null);

    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>,
    );
    await screen.findByText("Loading...");
  });
});
