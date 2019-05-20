import React, { PureComponent } from "react";
import RestaurantReviews from "./restaurant-reviews";
import { Button } from "antd";

class RestaurantReviewsPanel extends PureComponent {
  render() {
    const { reviews, isReviewsOpen } = this.props;

    return (
      <div className="restaurant-reviews-wrap">
        <Button onClick={this.handleOpenClick}>
          {isReviewsOpen ? "Close reviews" : "Open reviews"}
        </Button>
        {isReviewsOpen ? <RestaurantReviews reviews={reviews} /> : null}
      </div>
    );
  }

  handleOpenClick = () => {
    this.props.openReviews();
  };
}

export default RestaurantReviewsPanel;
