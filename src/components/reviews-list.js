import React from "react";
import Review from "./Review";
import { List } from "antd";

export default function ReviewsList(props) {
  return (
    <List>
      {props.reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </List>
  );
}
