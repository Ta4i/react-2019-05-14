import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import Rating from "antd/lib/rate";
import ReviewList from "./review-list";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isReviewsOpen
    } = this.props;
    const rating = this.calculateAverageRating(reviews);

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <Rating
          value={(rating ^ 0) == rating ? rating : (rating ^ 0) + 0.5}
          allowHalf
        />
        <span>{rating.toFixed(1)}</span>
        <button onClick={this.handleToggleOpenMenuClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        <button onClick={this.handleToggleOpenReviewsClick}>
          {isReviewsOpen ? "Close reviews" : "Open reviews"}
        </button>
        {isReviewsOpen ? <ReviewList reviews={reviews} /> : null}
      </div>
    );
  }

  handleToggleOpenMenuClick = () => {
    this.props.isMenuOpen
      ? this.props.toggleOpenMenu(null)
      : this.props.toggleOpenMenu(this.props.id);
  };

  handleToggleOpenReviewsClick = () => {
    this.props.isReviewsOpen
      ? this.props.toggleOpenReviews(null)
      : this.props.toggleOpenReviews(this.props.id);
  };

  calculateAverageRating(reviews) {
    return reviews.reduce((accum, r) => accum + r.rating, 0) / reviews.length;
  }
}

export default Restaurant;
