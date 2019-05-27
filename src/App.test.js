import React from "react";
import App from "./App";
import { restaurants } from "./fixtures";
import RestaurantList from "./components/restaurant-list";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("when open review", () => {
  if (
    ("should open review",
    () => {
      const reviewWrap = mount(<App restaurants={restaurants} />);
      reviewWrap
        .find('[data-review = "toggle-review"]')
        .at(0)
        .simulate("click");

      expect(reviewWrap.find('[data-review = "review"]').length).toEqual(1);
    })
  );
});

describe("when open review", () => {
  it("should open review", () => {
    const reviewWrap = mount(<App restaurants={restaurants} />);
    reviewWrap
      .find('[data-automation-id="toggle-review"]')
      .at(0)
      .simulate("click");

    expect(reviewWrap.find('[data-automation-id="review"]').length).toEqual(1);
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

// describe("when show RestaurantList", () => {
//   it("should fetch data", done => {
//     const fetchData = () => {
//       done();
//     };
//     const wrapper = mount(
//       <RestaurantList restaurants={restaurants} fetchData={fetchData} />
//     );
//   });
// });
