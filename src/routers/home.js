import { useEffect, useState } from 'react';
import Card from './card';
import './styles/home.css';
import { getWeatherData } from '../redux/weatherDetails/weatherDetailsSlice';

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData('paris');
      setWeather(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <main>
      {
            weather && (
            <div className="home_wrapper">
              <div className="header_wrapper p-r-10">
                <h1>
                  Weather App
                </h1>
              </div>
              <h2 className="small_title p-r-10">Forecast by City</h2>
              <div className="cards_wrapper">
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>
                <div className="card">
                  <Card />
                </div>

              </div>
            </div>

            )
        }
    </main>
  );
};

export default Home;
