import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";
import Dish from "./components/dish";

configure({ adapter: new Adapter() });

describe("when click on Open menu in Restaurant", () => {
  it("should open menu", () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    wrapper
      .find('[data-automation-id="toggle-menu"]')
      .at(0)
      .simulate("click");

    expect(wrapper.find('[data-automation-id="menu"]').length).toEqual(1);
  });
});

describe("when show RestaurantList", () => {
  it("shout fetch data", done => {
    const fetchData = () => {
      done();
    };
    const wrapper = mount(
      <RestaurantList restaurants={restaurants} fetchData={fetchData} />
    );
  });
});

describe("when load Dish", () => {
  it("component Dish loads with initial state of 0", () => {
    const wrapper = mount(<Dish />);
    const dishAmount = wrapper.find('[data-automation-id="dish-amount"]').at(0);

    expect(dishAmount.text()).toEqual("0");
  });
});
