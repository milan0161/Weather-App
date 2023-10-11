import { getCurrentWeatherAndForecast } from '../../app/api/api';
import { useContext } from 'react';
import WeatherContext from '../../store/context/weather-context';
import classes from './CityCard.module.css';
import CityContext from '../../store/context/city-context';

type CityCardProps = {
  city?: City;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const CityCard = ({ city, setSearch }: CityCardProps) => {
  const weatherCtx = useContext(WeatherContext);
  const cityCtx = useContext(CityContext);

  const onChoseCityHandler = () => {
    if (city) {
      getCurrentWeatherAndForecast(city.latitude, city.longitude)
        .then((data) => {
          if (data) {
            weatherCtx.onChoseCity(data.currentWeather);
            cityCtx.choseCity(city);
            weatherCtx.onSetForcast(data.forcaste.list.splice(0, 5));
            setSearch('');
          }
        })
        .catch((err) => console.log(err));
    }
    return;
  };

  return (
    <li className={classes['city_card']}>
      <button onClick={onChoseCityHandler} className={classes['city_card_btn']}>
        <p>{city?.city}</p>
        <p>{city?.country}</p>
      </button>
    </li>
  );
};

export default CityCard;
