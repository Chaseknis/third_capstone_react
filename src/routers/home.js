import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Card from './card';
import './styles/home.css';
import { fetchCities, selectCitiesData } from '../redux/cities/citiesSlice';

const Home = () => {
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

  const dispatch = useDispatch();
  const weatherData = useSelector(selectCitiesData);

  useEffect(() => {
    const fetchCitiesData = async () => {
      await dispatch(fetchCities(cities));
    };

    fetchCitiesData();
  }, [dispatch]);

  const getData = async (cityname) => {
    localStorage.setItem('cityname', JSON.stringify(cityname));
  };

  return (
    <main>
      <div className="home_wrapper">
        <div className="header_wrapper p-r-10">
          <h1>Weather App</h1>
        </div>
        <h2 className="small_title p-r-10">Forecast by City</h2>
        <div className="cards_wrapper">
          {weatherData.map((weather, index) => (
            <Link to="/details" key={uuidv4()}>
              <div
                className="card"
                role="button"
                tabIndex={0}
                onClick={() => getData(weather.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    getData();
                  }
                }}
                style={{ color: 'black' }}
              >
                <Card city={cities[index]} weather={weather} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
