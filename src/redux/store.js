import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import citiesReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
