import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import VisitorReviews from "./visitor-reviews";
import VisitorRating from "./visitor-rating";
import { toggleVisibility } from "../decorators/toggleVisibility";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      isMenuOpen,
      reviews,
      //props from toggleVisibility decorator
      toggleVisibility,
      isOpen: isReviewOpen
    } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <VisitorRating name={name} reviews={reviews} />
        <br />
        Visitor Reviews:
        <br />
        <button onClick={toggleVisibility}>
          {isReviewOpen ? "Close reviews" : "Open reviews"}
        </button>
        {isReviewOpen ? <VisitorReviews reviews={reviews} /> : null}
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

export default toggleVisibility(Restaurant);
