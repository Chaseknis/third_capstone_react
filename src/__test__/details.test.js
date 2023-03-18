import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../routers/details';

describe('Details component', () => {
  it('should render Loading... when weather is null', () => {
    render(<Details />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the weather data when weather is not null', () => {
    const mockWeather = {
      name: 'New York',
      country: 'US',
      iconURL: 'https://someicon.com',
      description: 'sunny',
      temp: 20,
      temp_min: 15,
      temp_max: 25,
      feels_like: 18,
      speed: 10,
      humidity: 80,
      pressure: 1000,
      sunrise: '6:00',
      sunset: '18:00',
      dt: '2022-03-18',
    };
    render(<Details weather={mockWeather} />);
    expect(screen.getByText(`${mockWeather.name}, ${mockWeather.country}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.description}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.temp.toFixed()}°C`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.temp_min.toFixed()}°C`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.temp_max.toFixed()}°C`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.feels_like.toFixed()}°C`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.speed} m/s`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.humidity}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.pressure}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.sunrise}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.sunset}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWeather.dt}`)).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const mockWeather = {
      name: 'New York',
      country: 'US',
      iconURL: 'https://someicon.com',
      description: 'sunny',
      temp: 20,
      temp_min: 15,
      temp_max: 25,
      feels_like: 18,
      speed: 10,
      humidity: 80,
      pressure: 1000,
      sunrise: '6:00',
      sunset: '18:00',
      dt: '2022-03-18',
    };
    const { asFragment } = render(<Details weather={mockWeather} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
