import { useContext } from 'react';
import WeatherContext from '../../store/context/weather-context';
import ForcastItem from './ForcastItem';
import classes from './ForcastList.module.css';
const ForcastList = () => {
  const forcastCtx = useContext(WeatherContext);

  return (
    <>
      {forcastCtx.forcast && (
        <ul className={classes['forcast_list']}>
          {forcastCtx.forcast.map((data, index) => {
            return <ForcastItem key={index} forcastItem={data} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ForcastList;
