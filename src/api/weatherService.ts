import axios from "axios";

const API_KEY = "6b22497ccd2d986e298b784409817f68";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (location: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`,
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export default fetchWeather;
