import ReactDOM from "react-dom/client";
import WeatherWidget from "./components/WeatherWidget";
import "./index.css";
import store from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <div className="bg-gray-100 h-screen">
      <WeatherWidget />
    </div>
  </Provider>,
);
