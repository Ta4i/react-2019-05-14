import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { restaurants } from '../../fixtures';
import RestaurantList from '../restaurant-list';

configure({ adapter: new Adapter() });

describe('when click on Open menu in Restaurant', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RestaurantList restaurants={restaurants} />);
  });

  it('should open menu', () => {
    const menuTabs = wrapper.find({ role: 'tab' });
    menuTabs.at(0).simulate('click');
    expect(wrapper.find({ 'data-automation-id': 'menu' }).length).toEqual(1);
  });
});
