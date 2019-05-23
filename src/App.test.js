import React from "react";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";
let wrapper;

configure({ adapter: new Adapter() });

describe("when click on Open menu in Restaurant", () => {
  test("should open menu", () => {
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);
    wrapper
      .find(`button[data-automation-id="toggle-menu-${restaurants[0].id}"]`)
      .simulate("click");

    expect(wrapper.find('div[data-automation-id="menu"]').length).toEqual(1);
    wrapper.unmount();
  });
});

describe("when click on Show reviews in Restaurant", () => {
  test("should open reviews list equals to the length of the reviews array", () => {
    const wrapper = mount(<RestaurantList restaurants={restaurants} />);
    wrapper
      .find(`button[data-automation-id="toggle-review-${restaurants[0].id}"]`)
      .simulate("click");

    expect(wrapper.find('div[data-automation-id="review"]').length).toEqual(
      restaurants[0].reviews.length
    );
  });
});

describe("when show RestaurantList", () => {
  test("shout fetch data", done => {
    const fetchData = () => {
      done();
    };
    mount(<RestaurantList restaurants={restaurants} fetchData={fetchData} />);
  });
});
