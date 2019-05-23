import React from "react";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount, configure } from "enzyme";
import RestaurantReviewsItem from "./components/restaurant-reviews-item";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const restaurantId = restaurants[0].id;
const reviewsIdList = restaurants[0].reviews.map(review => review.id);
const reviewId = reviewsIdList[0];

describe("when click on review list", () => {
  const wrapper = mount(<App restaurants={restaurants} />);

  it("should open reviews in restaurant", () => {
    wrapper
      .find(`button[data-toggle-review-btn-id="${restaurantId}"]`)
      .simulate("click");

    expect(wrapper.exists(`[data-review-id="${reviewId}"]`)).toEqual(true);
  });

  it("should reviews be equal to initial number", () => {
    expect(wrapper.find(RestaurantReviewsItem).length).toEqual(
      reviewsIdList.length
    );
  });

  it("should close reviews in restaurant", () => {
    wrapper
      .find(`button[data-toggle-review-btn-id="${restaurantId}"]`)
      .simulate("click");

    expect(wrapper.exists(`[data-review-id="${reviewId}"]`)).toEqual(false);
  });
});
