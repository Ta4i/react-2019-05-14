import React from "react";
import Rate from "antd/lib/rate";

function Review(props) {
  const { user, text, rating } = props;

  return (
    <div>
      <h3>{user}</h3>
      <Rate disabled defaultValue={rating} />
      <p>{text}</p>
    </div>
  );
}

export default Review;
