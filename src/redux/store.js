import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    weather: weatherDetailsSlice,
  },
});

export default store;
