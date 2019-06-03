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
  const valueAverage =
    reviews.reduce((acc, { rating }) => {
      return acc + rating;
    }, 0) / reviews.length;

  const value = Math.floor(valueAverage * 2) / 2;
  return value;
};

export default VisitorRating;
