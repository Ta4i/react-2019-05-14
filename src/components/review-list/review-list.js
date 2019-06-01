import React from "react";
import { List } from "antd";
import Review from "../review";
import PropTypes from "prop-types";

function ReviewList({ reviewIds }) {
  return (
    <List data-automation-id="review-list">
      {reviewIds.map(id => (
        <Review id={id} />
      ))}
    </List>
  );
}

ReviewList.propTypes = {
  reviewIds: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default ReviewList;
