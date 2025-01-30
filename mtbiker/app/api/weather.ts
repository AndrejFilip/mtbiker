import { basicFetch } from "../network/src/BasicFetch";

const API_KEY = "cadace86e298e8a5588baedcff7729ac";

export const createGetWeatherDataRequest =
  ({ location }: { location: string }) =>
  () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    const data = basicFetch(url);
    return data;
  };
