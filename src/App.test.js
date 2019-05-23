import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";
import ReviewList from "./components/review-list";

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

describe("when show review list", () => {
  it("should open review list", () => {
    const app = mount(<App restaurants={restaurants} />);
    app
      .find('[data-target="open-review-list"]')
      .at(0)
      .simulate("click");

    expect(app.find('[data-automation-review-id="review"]').length > 0);
  });
});
