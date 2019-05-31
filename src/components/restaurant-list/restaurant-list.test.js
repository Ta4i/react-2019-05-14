import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { restaurants } from '../../fixtures';
import RestaurantList from './restaurant-list';

configure({ adapter: new Adapter() });

describe('when show RestaurantList', () => {
  it('shout fetch data', done => {
    const fetchData = () => {
      done();
    };
    mount(<RestaurantList restaurants={restaurants} fetchData={fetchData} />);
  });
});
