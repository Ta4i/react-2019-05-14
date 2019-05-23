import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";
import Dish from "./components/dish";

configure({ adapter: new Adapter() });

describe("when click on Show reviews in Restaurant", () => {
  it("should open reviews", () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    wrapper
      .find(
        '[data-automation-id="toggle-review-a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"]'
      )
      .at(0)
      .simulate("click");

    expect(
      wrapper
        .find(
          '[data-automation-id="review-a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"]'
        )
        .exists()
    ).toEqual(true);
  });
});

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
