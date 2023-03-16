import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faArrowUp, faCloudMoon, faCloudSun, faSmog, faSun, faWind,
} from '@fortawesome/free-solid-svg-icons';
import './styles/details.css';
import { getWeatherData } from '../redux/weatherDetails/weatherDetailsSlice';

const Details = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData('paris', units);
      setWeather(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="details_container">
      <div className="details_wrapper">
        <div className="details_top_container">
          <div className="details_image_container">
            <h2>London</h2>
            <img src="https://www.openweathermap.org/img/wn/04d@2x.png" alt="weather_picture" />
            <small>Cloudy</small>
          </div>
          <div className="degrees">
            40°F
          </div>
        </div>

        <div className="details_bottom-wrapper">
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faArrowDown} className="white p-r-5" />
            Max 20°F
          </div>
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faArrowUp} className="white p-r-5" />
            Max 20°F
          </div>
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faSun} className="white p-r-5" />
            Feels Like
          </div>
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faWind} className="white p-r-5" />
            Wind Speed
          </div>
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faSmog} className="white p-r-5" />
            Humidity
          </div>
          <div className="details_card_wrapper">
            <FontAwesomeIcon icon={faWind} className="white p-r-5" />
            Pressure
          </div>
        </div>

        <div className="details_last_items_wrapper">
          <div className="last_details_wrapper flex_column">
            <div>
              <h2>Country</h2>
            </div>
            <div className="suns_wrapper flex_column">
              <div className="sunrise_sunset_wrapper">
                <FontAwesomeIcon icon={faCloudSun} className="white p-r-5" />
                <p>Sunrise</p>
              </div>
              <div className="sunrise_sunset_wrapper">
                <FontAwesomeIcon icon={faCloudMoon} className="white p-r-5" />
                <p>Sunset</p>
              </div>
            </div>
          </div>
          <div>
            <div>dt</div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Details;
