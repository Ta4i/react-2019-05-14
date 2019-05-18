import React, { PureComponent } from "react";
import { Card, Button, Rate } from "antd";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviewsList from "./restaurant-reviews-list";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;

    const { handleToggleOpenClick, getAverageRating } = this;

    /* Не стал использовать компонент Collapse, чтобы оставить всю логику,
       состояния показываю разной темой
    */
    return (
      <Card>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <div>
          <span style={{ marginRight: "10px" }}>Average rating:</span>
          <Rate allowHalf disabled defaultValue={getAverageRating()} />
        </div>
        <RestaurantReviewsList reviews={reviews} />
        <div style={{ marginTop: "20px" }}>
          <Button
            type={isMenuOpen ? "primary" : null}
            onClick={handleToggleOpenClick}
          >
            {isMenuOpen ? "Close menu" : "Open menu"}
          </Button>
          {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        </div>
      </Card>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };

  getAverageRating = () => {
    const { reviews } = this.props;

    if (!reviews && !reviews.length) {
      return 0;
    }

    const reviewsSum = reviews.reduce((sum, review) => sum + review.rating, 0);
    const rating = reviewsSum / reviews.length;
    return Math.round(rating * 2) / 2;
  };
}

export default Restaurant;
