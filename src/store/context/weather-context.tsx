import { useState, createContext } from 'react';

const WeatherContext = createContext({
  currentWeather: {} as CurrentWeather | undefined,
  onChoseCity: (weather: CurrentWeather) => {},
  forcast: [] as CurrentWeather[] | null,
  onSetForcast: (forcast: CurrentWeather[]) => {},
});

type WeatherContexProviderProps = {
  children: React.ReactNode;
};

export const WeatherContextProvider = ({
  children,
}: WeatherContexProviderProps) => {
  const [weather, setWeather] = useState<CurrentWeather>();
  const [forcast, setForcast] = useState<CurrentWeather[] | null>(null);
  const onChoseCity = (weather: CurrentWeather) => {
    setWeather(weather);
  };
  const onSetForcast = (forcast: CurrentWeather[]) => {
    setForcast(forcast);
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather: weather,
        onChoseCity,
        forcast,
        onSetForcast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
