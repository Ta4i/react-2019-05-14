import React from "react";
import { Rate } from "antd";

function RestaurantRating(props) {
  let count = 0,
    rate,
    intRate;

  props.reviews.map(item => (count += item.rating));

  count = Math.round((count / props.reviews.length) * 10) / 10;
  intRate = count ^ 0;

  rate = intRate === count ? count : intRate + 0.5;

  return (
    <div>
      <span className="rate">{count}</span>
      <Rate allowHalf disabled defaultValue={rate} />
    </div>
  );
}

export default RestaurantRating;
