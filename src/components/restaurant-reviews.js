import React from "react";
import Review from "./review";
import { collapse } from "../decorators/collapse";

const RestaurantReviews = props => {
  return (
    <div>
      <button onClick={props.handleExpand}>
        {props.expanded ? "Hide reviews" : "Show reviews"}
      </button>
      {props.expanded &&
        props.reviews.map(review => <Review key={review.id} {...review} />)}
    </div>
  );
};

export default collapse(RestaurantReviews);
