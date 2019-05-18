import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { Button, Icon } from "antd";
import RestaurantRate from "./restaurant-rate";
import RestaurantReviewList from "./restaurant-review-list";
import ToggleButton from "./toggle-button";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpened,
      areReviewsOpened
    } = this.props;
    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <RestaurantRate defaultValue={averageRating} />
        <ToggleButton
          onClick={this.handleToggleOpenMenu}
          isOpened={isMenuOpened}
          label="Menu"
        />
        <ToggleButton
          onClick={this.handleToggleOpenReviews}
          isOpened={areReviewsOpened}
          label="Reviews"
        />
        {isMenuOpened && <RestaurantMenu menu={menu} />}
        {areReviewsOpened && <RestaurantReviewList reviews={reviews} />}
      </div>
    );
  }

  handleToggleOpenMenu = () => {
    const { isMenuOpened } = this.props;
    this.props.toggleOpenMenu(isMenuOpened ? null : this.props.id);
  };

  handleToggleOpenReviews = () => {
    const { areReviewsOpened } = this.props;
    this.props.toggleOpenReviews(areReviewsOpened ? null : this.props.id);
  };
}

export default Restaurant;
