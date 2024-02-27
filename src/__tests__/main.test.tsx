import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import WeatherWidget from "../components/WeatherWidget";
import store from "../store/store";

describe("WeatherWidget", () => {
  it("renders input field and weather data", async () => {
    render(
      <Provider store={store}>
        <WeatherWidget />
      </Provider>,
    );
  });
});
