import React from "react";
import '@testing-library/jest-dom';
import {  fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import WeatherWidget from "../components/WeatherWidget";
import store from "../store/store";
import fetchMock from "jest-fetch-mock";

describe('WeatherWidget', () => {

  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
    fetchMock.mockClear();
  });
  test('renders input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>
    );
    const inputElement = getByPlaceholderText('Weather in your city');
    expect(inputElement).toBeDefined();
  });

  

  test('does not fetch weather data when city is empty', async () => {
    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Weather in your city');
    fireEvent.change(inputElement, { target: { value: '' } });

    expect(fetchMock).not.toHaveBeenCalled();
  });


  test('fetches weather data on city change', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify({ weather: { main: { temp: 25 } } }))

     render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Weather in your city');
    fireEvent.change(inputElement, { target: { value: 'London' } });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    // await screen.findByText('London');
    // expect(screen.getByText('H : 11')).toBeDefined();
  });
});
