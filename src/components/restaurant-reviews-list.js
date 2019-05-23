import React from "react";
import { Button, List } from "antd";
import PropTypes from "prop-types";
import { collapse } from "../decorators/collapse";
import RestaurantReviewsItem from "./restaurant-reviews-item";

const RestaurantReviewsList = props => {
  const { isItemOpen, collapseItem, reviews, id } = props;

  return (
    <div style={{ marginTop: "20px" }}>
      <Button
        type={isItemOpen ? "primary" : null}
        onClick={collapseItem}
        data-toggle-review-btn-id={id}
      >
        {isItemOpen ? "Hide reviews" : "Show reviews"}
      </Button>
      {isItemOpen ? (
        <List
          style={{ marginTop: "20px" }}
          bordered
          dataSource={reviews}
          renderItem={review => (
            <RestaurantReviewsItem {...review} data-review-id={review.id} />
          )}
        />
      ) : null}
    </div>
  );
};

RestaurantReviewsList.propTypes = {
  isItemOpen: PropTypes.bool,
  collapseItem: PropTypes.func,
  reviews: PropTypes.array,
  id: PropTypes.string
};

export default collapse(RestaurantReviewsList);
