import React, { PureComponent } from "react";
import RestaurantMenu from "../restaurant-menu";
import { Rate } from "antd";
import "./restaurant.css";
import ReviewList from "../review-list";
import ReviewItem from "../review-item";

class Restaurant extends PureComponent {
  state = {
    isOpenReviews: false
  };

  getRestaurantRating = reviews => {
    let initRating = 0;
    let sum = reviews.forEach(review => {
      initRating += review.rating;
    });
    let result = +(initRating / reviews.length).toFixed(1);
    let value = result % Math.floor(result);

    if (value === 0) {
      return result;
    } else if (value > 0.75) {
      return Math.ceil(result);
    } else if (0.25 <= value && value <= 0.75) {
      return Math.floor(result) + 0.5;
    } else if (value < 0.25) {
      return Math.floor(result);
    }
  };

  toggleOpenReviews = () => {
    this.setState({
      isOpenReviews: !this.state.isOpenReviews
    });
  };

  render() {
    const {
      image,
      name,
      menu,
      isMenuOpen,
      toggleOpenMenu,
      id,
      reviews
    } = this.props;

    let rating = this.getRestaurantRating(reviews);

    const reviewsList = reviews.map(review => (
      <ReviewItem key={review.id} {...review} />
    ));

    return (
      <div className="restaurant">
        <div className="restaurant-header">
          <img src={image} width={100} height={100} alt={name} />
          <div className="info">
            <h3 className="restaurant-title">{name}</h3>
            <Rate allowHalf value={rating} />

            <div className="controls">
              <button
                className="menu"
                onClick={() => {
                  toggleOpenMenu(id);
                  this.setState({
                    isOpenReviews: false
                  });
                }}
              >
                {isMenuOpen ? "Close menu" : "Open menu"}
              </button>
              <button className="review" onClick={this.toggleOpenReviews}>
                {this.state.isOpenReviews ? "Close reviews" : "Open reviews"}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        {this.state.isOpenReviews ? <ReviewList reviews={reviews} /> : null}
      </div>
    );
  }
}

export default Restaurant;
