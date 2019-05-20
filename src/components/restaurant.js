import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RateComponent from "./rate-component";
import ReviewList from "./reviews-list";
import { openClose } from "../decorators/open-close";

const ReviewListDecorated = openClose(ReviewList);

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        <RateComponent reviews={reviews} />
        <ReviewListDecorated reviews={reviews} />
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
