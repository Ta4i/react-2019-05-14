import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import { Button } from "antd";
import RestaurantRate from "./restaurant-rate";

class Restaurant extends PureComponent {
  rateDescription = [
    "Aweful",
    "Could be better",
    "Fine",
    "Damn, I'm good!",
    "10 points to Griffindor!"
  ];

  render() {
    const { image, name, menu, reviews, isMenuOpen } = this.props;
    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <RestaurantRate
          defaultValue={averageRating}
          tooltips={this.rateDescription}
          allowHalf
          disabled
        />
        <Button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </Button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    const { isMenuOpen } = this.props;
    this.props.toggleOpenMenu(isMenuOpen ? null : this.props.id);
  };
}

export default Restaurant;
