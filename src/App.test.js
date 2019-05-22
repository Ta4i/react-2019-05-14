import React from "react";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantList from "./components/restaurant-list";
let wrapper;

configure({ adapter: new Adapter() });

describe("when click on Open menu in Restaurant", () => {
  it("should open menu", () => {
    wrapper = mount(<RestaurantList restaurants={restaurants} />);
    wrapper
      .find(`[data-automation-id="toggle-menu-${restaurants[0].id}"]`)
      .hostNodes()
      .simulate("click");

    expect(wrapper.find('[data-automation-id="menu"]').length).toEqual(1);
    wrapper.unmount();
  });
});

describe("when click on Open review in Restaurant", () => {
  it("should open review", () => {
    wrapper = mount(<RestaurantList restaurants={restaurants} />);
    wrapper
      .find(`[data-automation-id="toggle-review-${restaurants[0].id}"]`)
      .hostNodes()
      .simulate("click");

    expect(
      wrapper.find('[data-automation-id="review"]').hostNodes().length
    ).toEqual(restaurants[0].reviews.length);
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
