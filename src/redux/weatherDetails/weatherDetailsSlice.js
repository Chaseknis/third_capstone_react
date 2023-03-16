const API_KEY = '4ffefc847431048ee9271c1ac89e9ad2';
const LONGITUDE = '-96.808891';
const LATITUDE = '32.779167';

const generateIconUrl = (iconId) => `https://www.openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);

  const {
    weather,
    coord: { lat, lon },
    main: {
      feels_like,
      humidity,
      pressure,
      temp,
      temp_max,
      temp_min,
    },
    name,
    dt,
    sys: { country, sunrise, sunset },
    wind: { speed },
  } = data;

  const { main: details, description, icon } = weather[0];

  return {
    lat,
    lon,
    feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    name,
    speed,
    description,
    country,
    sunrise,
    sunset,
    dt,
    details,
    iconURL: generateIconUrl(icon),
  };
};

export { getWeatherData };
