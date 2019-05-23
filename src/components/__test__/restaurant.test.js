import React from "react";
import Restaurant from "../restaurant";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const restaurantWithReviewModel = {
  id: "RestauranWithReview",
  name: "RestauranWithReview",
  location: {},
  image: "",
  menu: [],
  reviews: [
    {
      id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
      user: "Antony",
      text: "Not bad",
      rating: 5
    },
    {
      id: "429dea85-11dd-4054-a31e-c60c92e17255",
      user: "Sam",
      text: "No burgers",
      rating: 3
    }
  ]
};

const restaurantWithoutReviewModel = {
  id: "RestauranWithReview",
  name: "RestauranWithReview",
  location: {},
  image: "",
  menu: [],
  reviews: []
};

describe("restaurant with menu and click on Open Review", () => {
  const wrapper = mount(<Restaurant {...restaurantWithReviewModel} />);
  const findActualReviews = () => wrapper.find('[data-aid*="review-"]');
  const clickOnToggleReviewsButton = () =>
    wrapper
      .find('[data-aid="toggle-reviews"]')
      .first()
      .simulate("click");

  it("should open review list with correct amount of reviews", () => {
    clickOnToggleReviewsButton();

    const actualReviews = findActualReviews();

    expect(actualReviews.length).toEqual(
      restaurantWithReviewModel.reviews.length
    );
  });

  it("should close review list after second click", () => {
    clickOnToggleReviewsButton();

    const actualReviews = findActualReviews();

    expect(actualReviews.length).toEqual(0);
  });
});

describe("restaurant without menu and click on Open Review", () => {
  it("has no reviews in a list", () => {
    const wrapper = mount(<Restaurant {...restaurantWithoutReviewModel} />);

    wrapper
      .find('[data-aid="toggle-reviews"]')
      .first()
      .simulate("click");

    const actualReviews = wrapper.find('[data-aid*="review-"]');

    expect(actualReviews.length).toEqual(
      restaurantWithoutReviewModel.reviews.length
    );
  });
});
