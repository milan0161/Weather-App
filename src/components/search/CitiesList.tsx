import CityContext from '../../store/context/city-context';
import { useContext } from 'react';
import CityCard from './CityCard';
import classes from './CitiesList.module.css';

type CitiesListProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const CitiesList = ({ setSearch }: CitiesListProps) => {
  const ctx = useContext(CityContext);

  return (
    <ul className={classes['cities_card_list']}>
      {ctx.cities &&
        ctx.cities.map((city, index) => {
          return <CityCard key={index} city={city} setSearch={setSearch} />;
        })}
    </ul>
  );
};

export default CitiesList;
