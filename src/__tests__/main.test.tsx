import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import WeatherWidget from "../components/WeatherWidget";
import store from "../store/store";

describe('WeatherWidget', () => {
  test('renders input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>
    );
    const inputElement = getByPlaceholderText('Weather in your city');
    expect(inputElement).toBeInTheDocument();
  });
});
