import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import Rate from "antd/lib/rate";
import ReviewsList from "./reviews-list";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, reviews, isMenuOpen } = this.props;
    const averageRating = this.calculateAverageRating(reviews);

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <Rate disabled allowHalf defaultValue={averageRating} />
        <h3>{name}</h3>
        <ReviewsList reviews={reviews} />
        <br />
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }

  calculateAverageRating(reviews) {
    const ratingSum = reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0);
    return ratingSum / reviews.length;
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
