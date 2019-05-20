import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviews from "./restaurant-reviews";
import { Rate } from "antd";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      openItemId,
      reviews,
      openItemName,
      id
    } = this.props;

    const ratingSum = reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0);

    const rating = ratingSum / reviews.length;
    const ratingRounded = Math.round(rating * 10) / 10;

    const ratingNormalized =
      (ratingRounded ^ 0) === ratingRounded
        ? ratingRounded
        : (ratingRounded ^ 0) + 0.5;

    const isRestaurantActive = openItemId === id;

    const isMenuOpen = openItemName === "menu" && isRestaurantActive;
    const isReviewOpen = openItemName === "review" && isRestaurantActive;

    return (
      <div className="col-md-3">
        <div className="card">
          <div
            className="restaurant-image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <div className={"mb-3"}>
              <Rate disabled defaultValue={ratingNormalized} allowHalf={true} />
              {ratingRounded}
            </div>

            <button
              onClick={() => {
                this.handleToggleOpenClick("menu");
              }}
              className={"btn btn-primary mr-1"}
            >
              {isMenuOpen ? "Close menu" : "Open menu"}
            </button>

            <button
              onClick={() => {
                this.handleToggleOpenClick("review");
              }}
              className={"btn btn-secondary"}
            >
              {isReviewOpen ? "Hide reviews" : "Show reviews"}
            </button>

            {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
            {isReviewOpen ? <RestaurantReviews reviews={reviews} /> : null}
          </div>
        </div>
      </div>
    );
  }

  handleToggleOpenClick = componentName => {
    this.props.toggleOpenMenu(this.props.id, componentName);
  };
}

export default Restaurant;
