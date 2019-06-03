import React from "react";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount } from "enzyme";

describe("App at start", () => {
  it("should not crash", () => {
    mount(<App restaurants={restaurants} />);
  });
});

describe("when click on Reviews in Restaurant review shown", () => {
  it("should open reviews", () => {
    const wrapper = mount(<App restaurants={restaurants} />);
    wrapper
      .find('[data-automation-id="review-open"]')
      .at(0)
      .simulate("click");

    expect(wrapper.find('[data-automation-id="review"]').length).toEqual(1);
  });
});
