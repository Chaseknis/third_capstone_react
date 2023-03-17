import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faArrowRight, faArrowUp, faCloudMoon, faCloudSun, faSmog, faSun, faThermometer, faWind,
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

        <h2 className="small_title p-r-10">City Breakdown</h2>

        <div className="details_bottom-wrapper">
           <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faArrowDown} className="white p-r-5" />
              Max 20°F
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faArrowUp} className="white p-r-5" />
              Max 20°F
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faSun} className="white p-r-5" />
              Feels Like
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faWind} className="white p-r-5" />
              Wind Speed
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faSmog} className="white p-r-5" />
              Humidity
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
              <FontAwesomeIcon icon={faWind} className="white p-r-5" />
              Pressure
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
            <FontAwesomeIcon icon={faCloudSun} className="white p-r-5" />
            Sunrise
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
            <FontAwesomeIcon icon={faThermometer} className="white p-r-5" />
             dt
            </div>
            <div className="arrow_wrapper">
              <FontAwesomeIcon icon={faArrowRight} className="arrow_icon white" />
            </div>
          </div>
          <div className="details_card_wrapper">
            <div>
            <FontAwesomeIcon icon={faCloudMoon} className="white p-r-5" />
            Sunset
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
