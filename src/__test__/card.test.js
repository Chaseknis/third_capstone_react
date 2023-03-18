import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../routers/card';

jest.mock('../redux/api/api', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    name: 'New York',
    country: 'US',
    temp: 18.5,
    iconURL: 'https://www.example.com/image.png',
    description: 'Clear Sky',
  })),
}));

describe('Card', () => {
  test('renders card details', async () => {
    render(<Card city="New York" />);
    const cityName = await screen.findByTestId('city-name');
    const temp = await screen.findByText(/18\.5°C/);
    const description = await screen.findByText(/Clear Sky/);
    const image = await screen.findByAltText(/weather_icon/);
    const arrow = await screen.findByTitle(/arrow/);
    expect(cityName).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(arrow).toBeInTheDocument();
    expect(cityName).toHaveTextContent('New York, US');
  });
});
