import React from "react";
import Review from "./review";

import { Button } from "antd";

import { collapse } from "../decorators/collapse";

function RestaurantReviews(props) {
  const { reviews, isOpen, toggleOpen } = props;

  return (
    <div>
      {reviews.length ? (
        <div>
          <Button type="link" style={{ padding: 0 }} onClick={toggleOpen}>
            {isOpen ? "Close reviews" : "Open reviews"}
          </Button>
          {isOpen
            ? reviews.map(item => <Review key={item.id} {...item} />)
            : ""}
        </div>
      ) : (
        "no reviews"
      )}
    </div>
  );
}

export default collapse(RestaurantReviews);
