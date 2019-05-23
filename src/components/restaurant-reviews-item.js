import React from "react";
import { List, Rate } from "antd";
import PropTypes from "prop-types";

const RestaurantReviewsItem = props => {
  const { user, text, rating } = props;

  return (
    <List.Item>
      <div>
        <div>User: {user}</div>
        <div>
          <span style={{ marginRight: "10px" }}>Rating:</span>
          <Rate defaultValue={rating} disabled />
        </div>
        <div style={{ marginTop: "5px" }}>Text: {text}</div>
      </div>
    </List.Item>
  );
};

RestaurantReviewsItem.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number
};

export default RestaurantReviewsItem;
