interface Measurement {
  latitude: DoubleRange;
  longitude: DoubleRange;
}

interface ResponseCity {
  [key: string]: string | number | DoubleRange;
}

interface City {
  city: string;
  country: string;
  latitude: DoubleRange;
  longitude: DoubleRange;
}

interface CurrentWeather {
  dt_txt?: string;
  main: {
    feels_like: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  weather: Weather[];
}

type Weather = {
  description: string;
  main: string;
  icon: string;
};
