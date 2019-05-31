import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { restaurants } from '../../fixtures';
import RestaurantList from '../restaurant-list';
import ReviewList from './review-list';

configure({ adapter: new Adapter() });

describe('when click on Open Reviews in Restaurant', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RestaurantList restaurants={restaurants} />);
  });

  it('should open reviews', () => {
    const menuTabs = wrapper.find({ role: 'tab' });
    menuTabs.at(1).simulate('click');
    expect(wrapper.find(ReviewList).length).toEqual(1);
  });
});
