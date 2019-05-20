import React from "react";

import { Rate } from "antd";

import "./review.css";

function Review(props) {
  return (
    <div className="b-review">
      <div className="b-review__head">
        <div className="b-review__name">{props.user}</div>
        <Rate
          allowHalf
          style={{
            fontSize: "12px"
          }}
          defaultValue={props.rating}
          size
          disabled
        />
      </div>
      <div>{props.text}</div>
    </div>
  );
}

export default Review;
