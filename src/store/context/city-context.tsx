import { useState, createContext } from 'react';

const CityContext = createContext({
  cities: [] as City[],
  city: null as City | null,
  onSearch: (cities: City[]) => {},
  choseCity: (city: City) => {},
});

type CityContexProviderProps = {
  children: React.ReactNode;
};

export const CityContextProvider = ({ children }: CityContexProviderProps) => {
  const [cities, setCities] = useState<City[]>([]);
  const [city, setCity] = useState<City | null>(null);
  const onSearch = (cities: City[]) => {
    if (cities) {
      setCities(cities);
    }
  };
  const choseCity = (city: City) => {
    setCity(city);
  };
  return (
    <CityContext.Provider
      value={{
        cities,
        onSearch: onSearch,
        city,
        choseCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
