import React from "react";

import { Rate } from "antd";

function Review(props) {
  return (
    <div className="b-reviews">
      <div className="b-reviews__head">
        <div className="b-reviews__name">{props.user}</div>
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
