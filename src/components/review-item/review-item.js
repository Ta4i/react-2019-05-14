import React from "react";

import "./review-item.css";

import { Rate } from "antd";

function ReviewItem(props) {
  const { user, text, rating } = props;

  return (
    <div className="review-item">
      <div className="author">{user}</div>
      <div className="info">
        <div className="text">{text}</div>
        <Rate allowHalf value={rating} className="review-rating" />
      </div>
    </div>
  );
}

export default ReviewItem;
