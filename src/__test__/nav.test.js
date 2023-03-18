import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import citiesReducer from '../redux/cities/citiesSlice';
import renderer from 'react-test-renderer';
import Nav from '../routers/nav'

const store = configureStore({
    reducer: {
        cities: citiesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

describe('Details component', () => {
    it('Details component', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Router>
                    <Nav />
                </Router>
            </Provider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
