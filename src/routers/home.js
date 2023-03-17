import { useEffect, useState } from 'react';
import Card from './card';
import './styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, selectCitiesData } from '../redux/cities/citiesSlice';

const cities = [
  'paris',
  'london',
  'new york',
  'tokyo',
  'new jersey',
  'birmingham',
  'los angeles',
  'sydney',
  'toronto',
  'manchester',
];

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectCitiesData);

  useEffect(() => {
    dispatch(fetchCities(cities));
  }, [dispatch]);

  return (
    <main>
      <div className="home_wrapper">
        <div className="header_wrapper p-r-10">
          <h1>Weather App</h1>
        </div>
        <h2 className="small_title p-r-10">Forecast by City</h2>
        <div className="cards_wrapper">
          {weatherData.map((weather, index) => (
            <div className="card" key={index}>
              <Card city={'Kinshasa'} weather={weather} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;

