import React from "react";
import Rate from "antd/lib/rate";

function Review(props) {
  const { user, rating, text } = props.review;
  return (
    <div class="review">
      <div>
        <a href="#">{user}</a>
      </div>
      <div>
        <i>{text}</i>
      </div>
      <Rate allowHalf disabled value={rating} defaultValue={0} />
    </div>
  );
}

export default Review;
