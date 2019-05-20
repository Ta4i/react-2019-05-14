import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { Rate } from "antd";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;
    console.log(reviews);
    const rate = this.RatingAverage(reviews);
    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>
          {name}, visitors rating: <Rate allowHalf value={rate} />
        </h3>
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }

  RatingAverage = reviews => {
    let totalValue = 0;
    for (const review of reviews) {
      totalValue += review.rating;
    }

    let valueAverage = totalValue / reviews.length;
    let value =
      (valueAverage ^ 0) == valueAverage
        ? valueAverage
        : (valueAverage ^ 0) + 0.5;
    return value;
  };
  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
