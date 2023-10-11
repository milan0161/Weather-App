import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from './SerachBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useContext } from 'react';
import { fetchOptions } from '../../app/api/api';
import CityContext from '../../store/context/city-context';
import CitiesList from './CitiesList';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  const ctx = useContext(CityContext);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value == '') {
      ctx.onSearch([]);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (search.length > 0) {
        fetchOptions(search).then((data) => {
          if (data) {
            ctx.onSearch(data);
          }
        });
      } else {
        return;
      }
    }, 600);

    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div className={classes['search_container']}>
      <form>
        <input
          value={search}
          type="search"
          onChange={onSearchHandler}
          name=""
          id=""
          placeholder="Enter the name of the city"
        />
        <button disabled>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      {search.length !== 0 && <CitiesList setSearch={setSearch} />}
    </div>
  );
};

export default SearchBar;
