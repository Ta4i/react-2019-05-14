import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviews from "./restaurant-reviews";

import "./restaurant.css";

import { Rate, Button } from "antd";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, reviews, isMenuOpen } = this.props;

    let rateNumber = 0;

    if (reviews.length) {
      rateNumber =
        reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
      rateNumber = Math.round(rateNumber * 2) / 2;
    }

    return (
      <div className="b-restaurant-item">
        <div className="b-restaurant-item__head">
          <div className="b-restaurant-item__name">
            <img src={image} width={64} height={64} alt={name} />
            <h3>{name}</h3>
          </div>
          <Rate allowHalf defaultValue={rateNumber} size disabled />
        </div>

        <Button
          type="link"
          style={{ padding: 0 }}
          onClick={this.handleToggleMenuClick}
        >
          {isMenuOpen ? "Close menu" : "Open menu"}
        </Button>

        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        <RestaurantReviews reviews={reviews} />
      </div>
    );
  }

  handleToggleMenuClick = () => {
    const { id, isMenuOpen } = this.props;
    this.props.toggleMenu(id, !isMenuOpen);
  };
}

export default Restaurant;
