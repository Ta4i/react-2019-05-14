import React from "react";
import { Rate } from "antd";

const VisitorRating = ({ name, reviews }) => {
  const rate = ratingAverage(reviews);

  return (
    <h3>
      {name}, visitors rating: <Rate allowHalf value={rate} />
    </h3>
  );
};

const ratingAverage = reviews => {
  let totalValue = 0;
  for (const review of reviews) {
    totalValue += review.rating;
  }

  let valueAverage = totalValue / reviews.length;
  let value =
    (valueAverage ^ 0) === valueAverage
      ? valueAverage
      : (valueAverage ^ 0) + 0.5;
  return value;
};

export default VisitorRating;
