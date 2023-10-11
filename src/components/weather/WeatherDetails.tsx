import { useContext } from 'react';
import classes from './WeatherDetails.module.css';
import WeatherContext from '../../store/context/weather-context';
import CityContext from '../../store/context/city-context';
const WeatherDetails = () => {
  const weatherCtx = useContext(WeatherContext);
  const cityCtx = useContext(CityContext);

  return (
    <>
      {weatherCtx.currentWeather && (
        <div className={classes['weather']}>
          <div className={classes['weather_top']}>
            <div className={classes['img_div']}>
              <img
                src={`icons/${weatherCtx.currentWeather.weather[0].icon}.png`}
                alt=""
              />
              <p>{weatherCtx.currentWeather?.weather[0].main}</p>
            </div>
            <div className={classes['main_temp_div']}>
              <p className={classes['city_name']}>{cityCtx.city?.city}</p>
              <p className={classes['city_country']}>{cityCtx.city?.country}</p>
              <p className={classes['city_temp']}>
                {Math.round(weatherCtx.currentWeather?.main.temp) + '°C'}
              </p>
              <p className={classes['temp_feels_like']}>
                Feels like{' '}
                <strong>
                  {Math.round(weatherCtx.currentWeather?.main.feels_like) +
                    '°C'}
                </strong>
              </p>
            </div>
          </div>
          <div className={classes['weather_bot']}>
            <p>
              <span>Max</span>
              <strong>
                {Math.round(weatherCtx.currentWeather?.main.temp_max) + '°C'}
              </strong>
            </p>
            <p>
              <span>Min</span>
              <strong>
                {Math.round(weatherCtx.currentWeather?.main.temp_min) + '°C'}
              </strong>
            </p>
            <p>
              <span>Wind</span>
              <strong>{weatherCtx.currentWeather?.wind.speed}km/h</strong>
            </p>
            <p>
              <span> Preassure</span>
              <strong>{weatherCtx.currentWeather?.main.pressure}mb</strong>
            </p>
            <p>
              <span> Humidity</span>
              <strong>{weatherCtx.currentWeather?.main.humidity}%</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
