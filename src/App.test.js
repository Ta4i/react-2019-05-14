import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";

configure({ adapter: new Adapter() });

const restorauntId = "bb8afbec-2fec-491f-93e9-7f13950dd80b";

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

describe("open reviews list", () => {
  it("should open reviews", () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    wrapper
      .find(`button[data-automation-id="toggle-review-${restorauntId}"]`)
      .simulate("click");

    const list = wrapper.find(
      `div[data-automation-id="review-${restorauntId}"]`
    );
    expect(list.exists()).toEqual(true);
  });
});
