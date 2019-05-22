import React from "react";
import ReactDOM from "react-dom";
import Restaurant from "../restaurant";
import { mount, render, configure } from "enzyme";
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

describe("when click on Open Review", () => {
  it("should open review list with correct amount of reviews", () => {
    const wrapper = mount(<Restaurant {...restaurantWithReviewModel} />);

    wrapper
      .find('[data-aid="toggle-reviews"]')
      .first()
      .simulate("click");

    const actualReviews = wrapper.find('[data-aid*="review-"]');

    expect(actualReviews.length).toEqual(
      restaurantWithReviewModel.reviews.length
    );
  });
});
