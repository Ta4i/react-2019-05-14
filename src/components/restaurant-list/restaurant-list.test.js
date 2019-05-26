import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../review-list';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RestaurantList from './restaurant-list';

configure({ adapter: new Adapter() });

describe('when click on Open menu in Restaurant', () => {
  it('should open menu', () => {
    const wrapper = mount(<App />);
    const menuTabs = wrapper.find({ role: 'tab' });
    menuTabs.at(0).simulate('click');
    expect(wrapper.find({ 'data-automation-id': 'menu' }).length).toEqual(1);
  });
});

describe('when click on Open Reviews in Restaurant', () => {
  it('should open reviews', () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    const menuTabs = wrapper.find({ role: 'tab' });
    menuTabs.at(1).simulate('click');
    expect(wrapper.find(ReviewList).length).toEqual(1);
  });
});

describe('when show RestaurantList', () => {
  it('shout fetch data', done => {
    const fetchData = () => {
      done();
    };
    const wrapper = mount(<RestaurantList restaurants={restaurants} fetchData={fetchData} />);
  });
});
