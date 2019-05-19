import React from "react";
import Rate from "antd/lib/rate";

export default function RestaurantRate(props) {
  const { reviews } = props;
  const avg = arr => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const roundToHalfStar = val => Math.round(val / 0.5) * 0.5;
  const stars = roundToHalfStar(avg(reviews.map(x => x.rating)));
  return <Rate allowHalf disabled value={stars} />;
}
