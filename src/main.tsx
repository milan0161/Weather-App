import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CityContextProvider } from './store/context/city-context.tsx';
import { WeatherContextProvider } from './store/context/weather-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CityContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </CityContextProvider>
  </React.StrictMode>,
);
