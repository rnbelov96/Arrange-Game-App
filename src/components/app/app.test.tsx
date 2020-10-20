import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { App } from './app';

const mockStore = configureStore([]);

describe('App', () => {
  test('should render greating screen with greating message', () => {
    const store = mockStore({
      app: {
        field: [null, 7, 6, 8, 4, 1, 3, 5, 2],
        emptyCell: 0,
        cellsToClick: [3, 1],
        inputValue: 'three',
        isStarted: false,
        isFinished: false,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render greating screen with winning message', () => {
    const store = mockStore({
      app: {
        field: [null, 7, 6, 8, 4, 1, 3, 5, 2],
        emptyCell: 0,
        cellsToClick: [3, 1],
        inputValue: 'three',
        isStarted: false,
        isFinished: true,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render game screen', () => {
    const store = mockStore({
      app: {
        field: [null, 7, 6, 8, 4, 1, 3, 5, 2],
        emptyCell: 0,
        cellsToClick: [3, 1],
        inputValue: 'three',
        isStarted: true,
        isFinished: false,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
