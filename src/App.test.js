import React from 'react';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import config from './config';
import ConnectedApp, { App } from './App';

configure({ adapter: new Adapter() });

describe('App at start', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(config.defaultStore);
    wrapper = shallow(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  });

  it('should not crash', () => {
    expect(wrapper.find(ConnectedApp).length).toEqual(1);
  });
});
