import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/cities/citiesSlice';
import Home from '../routers/home';

jest.mock('react-redux');

describe('Home component', () => {
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

  const weatherData = [
    { name: 'Paris', temp: 15 },
    { name: 'London', temp: 12 },
    { name: 'New York', temp: 10 },
    { name: 'Tokyo', temp: 18 },
    { name: 'New Jersey', temp: 8 },
    { name: 'Birmingham', temp: 11 },
    { name: 'Los Angeles', temp: 22 },
    { name: 'Sydney', temp: 25 },
    { name: 'Toronto', temp: 5 },
    { name: 'Manchester', temp: 9 },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      citiesData: weatherData,
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders the header and small title', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Weather App');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Forecast by City');
  });

  test('renders a card for each city', () => {
    render(<Home />);

    const cards = screen.getAllByRole('button');

    expect(cards).toHaveLength(cities.length);

    cards.forEach((card, index) => {
      expect(card).toHaveAttribute('href', '/details');
      expect(card).toHaveTextContent(cities[index]);
    });
  });

  test('sets the cityname in localStorage on card click', () => {
    render(<Home />);

    const cards = screen.getAllByRole('button');

    cards.forEach((card, index) => {
      fireEvent.click(card);
      expect(localStorage.setItem).toHaveBeenLastCalledWith('cityname', JSON.stringify(weatherData[index].name));
    });
  });

  test('dispatches the fetchCities action on mount', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<Home />);

    expect(dispatch).toHaveBeenCalledWith(fetchCities(cities));
  });

  test('matches snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
