import temp from './assets/temp.png';
import SearchBar from './components/search/SearchBar';
import ForcastList from './components/weather/ForcastList';
import WeatherDetails from './components/weather/WeatherDetails';
import './index.css';

function App() {
  return (
    <div className="bg">
      <h1 className="main_title">
        <img src={temp} alt="sun" />
        <span>Weather App</span>
      </h1>

      <div className="container">
        <SearchBar />
        <WeatherDetails />
        <ForcastList />
      </div>
    </div>
  );
}

export default App;
