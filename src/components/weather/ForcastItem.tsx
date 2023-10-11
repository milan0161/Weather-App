import ForcastItemDate from './ForcastItemDate';
import classes from './ForcastItem.module.css';
type ForcastItemProps = {
  forcastItem: CurrentWeather;
};

const ForcastItem = ({ forcastItem }: ForcastItemProps) => {
  return (
    <li className={classes['forcast_item']}>
      <div className={classes['forcast_item_date_div']}>
        <ForcastItemDate date={forcastItem.dt_txt!} />
      </div>
      <div className={classes['forcast_item_bot']}>
        <img src={`icons/${forcastItem.weather[0].icon}.png`} />
        <div className={classes['min_max_div']}>
          <p>
            <strong>{Math.round(forcastItem.main.temp_max)} °C</strong>
          </p>
          <p>{Math.round(forcastItem.main.temp_min)} °C</p>
        </div>
      </div>
    </li>
  );
};

export default ForcastItem;
