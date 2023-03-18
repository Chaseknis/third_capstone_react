import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faCloudMoon,
  faCloudSun,
  faSmog,
  faSun,
  faThermometer,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import './styles/details.css';
import getWeatherData from '../redux/api/api';

const Details = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(null);

  useEffect(() => {
    const city = JSON.parse(localStorage.getItem('cityname'));
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(city, units);
        setWeather(data);
        setUnits(units);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchWeatherData();
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!weather) {
    return <div>Loading...</div>;
  }
  return (
    <div className="details_container">
      <div className="details_wrapper">
        <div className="details_top_container">
          <div className="details_image_container">
            <h2>{`${weather.name}, ${weather.country}`}</h2>
            <img src={`${weather.iconURL}`} alt="weather_picture" />
            <small>{weather.description}</small>
          </div>
          <div className="degrees">
            {`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}
          </div>
        </div>

        <h2 className="small_title p-r-10">City Breakdown</h2>

        <div className="details_bottom-wrapper">
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faArrowDown} className="white p-r-5" />
              Min:
              {' '}
              {`${weather.temp_min.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faArrowUp} className="white p-r-5" />
              Max:
              {' '}
              {`${weather.temp_max.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faSun} className="white p-r-5" />
              Feels Like:
              {' '}
              {`${weather.feels_like}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faWind} className="white p-r-5" />
              Wind Speed:
              {' '}
              {`${weather.speed} ${units === 'metric' ? 'm/s' : 'm/h'}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faSmog} className="white p-r-5" />
              Humidity:
              {' '}
              {`${weather.humidity}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faWind} className="white p-r-5" />
              Pressure:
              {' '}
              {`${weather.pressure}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faCloudSun} className="white p-r-5" />
              Sunrise:
              {' '}
              {`${weather.sunrise}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faThermometer} className="white p-r-5" />
              dt:
              {' '}
              {`${weather.dt}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faCloudMoon} className="white p-r-5" />
              Sunset:
              {' '}
              {`${weather.sunset}`}
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Details;
