const rapid_api_key = import.meta.env.VITE_REACT_RAPID_API_KEY;
const openweather_token = import.meta.env.VITE_REACT_OPENWEATHER_TOKEN;
console.log(rapid_api_key);
const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${rapid_api_key}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const apiKey = openweather_token;

export const fetchOptions = async (namePrefix?: string) => {
  try {
    const response = await fetch(
      `${url}?minPopulation=1000000&namePrefix=${namePrefix}`,
      geoApiOptions,
    );
    const result = await response.json();
    if (response.ok) {
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentWeatherAndForecast = async (
  lat: DoubleRange,
  lon: DoubleRange,
) => {
  try {
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    );
    const forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    );
    return await Promise.all([currentWeather, forecast]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        return { currentWeather: weatherResponse, forcaste: forecastResponse };
      },
    );
  } catch (error) {
    console.error(error);
  }
};
