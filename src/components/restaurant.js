import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviews from "./restaurant-reviews";
import { Button } from "antd";
import { toggleReviewsDecorator } from "./../decorators/toggle-reviews";

class Restaurant extends PureComponent {
  render() {
    console.log("render");
    const {
      image,
      name,
      menu,
      isMenuOpen,
      reviews,
      // props from DecoratedComponentReviews
      isOpenReview,
      handleToggleReviews
    } = this.props;

    return (
      <div className={"restaurant"}>
        <img src={image} alt={name} />
        <h3 className={"restaurant__title"}>{name}</h3>
        <Button onClick={this.handleToggleOpenClick} type="primary">
          {isMenuOpen ? "Close menu" : "Open menu"}
        </Button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        <div className={"restaurant-reviews"}>
          <Button onClick={handleToggleReviews} type="dashed">
            {isOpenReview ? "Reviews close" : "Reviews open"}
          </Button>
          {reviews.map(review => (
            <RestaurantReviews
              key={review.id}
              {...review}
              toggleReview={isOpenReview}
            />
          ))}
        </div>
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default toggleReviewsDecorator(Restaurant);
