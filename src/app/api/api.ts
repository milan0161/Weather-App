const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b2272553bcmshbe0964e8d2d1334p1a8841jsn6117ffa4406a',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const apiKey = '4cf400c58a453f66175854fee1dbddb4';

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
