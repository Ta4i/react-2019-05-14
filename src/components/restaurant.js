import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import VisitorReviews from "./visitor-reviews";
import VisitorRating from "./visitor-rating";
import { accordion } from "../decorators/accordion";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <VisitorRating name={name} reviews={reviews} />
        <br />
        Visitor Reviews:
        <br />
        <VisitorReviews reviews={reviews} />
        <br />
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default accordion(Restaurant);
