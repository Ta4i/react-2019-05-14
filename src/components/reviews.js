import React from "react";
import { Rate } from "antd";

function Reviews(props) {
  return (
    <div className="restaurant-review">
      <span>{props.user}</span>
      <br />
      <Rate allowHalf disabled defaultValue={props.rating} />
      <p className="review-text">{props.text}</p>
      <hr />
    </div>
  );
}

export default Reviews;
