import React from "react";
import { Button, List } from "antd";
import { collapse } from "../decorators/collapse";
import RestaurantReviewsItem from "./restaurant-reviews-item";

const RestaurantReviewsList = props => {
  const { isItemOpen, collapseItem, reviews } = props;

  return (
    <div style={{ marginTop: "20px" }}>
      <Button type={isItemOpen ? "primary" : null} onClick={collapseItem}>
        {isItemOpen ? "Hide reviews" : "Show reviews"}
      </Button>
      {isItemOpen ? (
        <List
          style={{ marginTop: "20px" }}
          bordered
          dataSource={reviews}
          renderItem={review => <RestaurantReviewsItem {...review} />}
        />
      ) : null}
    </div>
  );
};

export default collapse(RestaurantReviewsList);
