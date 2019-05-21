import React from "react";
import Comment from "antd/lib/comment";
import Rate from "antd/lib/rate";

export default function Review(props) {
  const { user, text, rating } = props;
  return (
    <div>
      <Comment
        author={user}
        content={text}
        datetime={<Rate disabled value={rating} />}
      />
    </div>
  );
}
