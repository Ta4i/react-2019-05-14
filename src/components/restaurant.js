import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import Rate from "antd/lib/rate";
import RestaurantReviews from "./restaurant-reviews";
import { opener } from "../decorators/opener";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isReviewsOpen,
      toggleOpenList
    } = this.props;
    let averageRate = reviews.length
      ? reviews.reduce((average, current) => {
          return average + current.rating / reviews.length;
        }, 0)
      : 0;
    const value =
      (averageRate ^ 0) == averageRate ? averageRate : (averageRate ^ 0) + 0.5;
    averageRate =
      (averageRate ^ 0) == averageRate ? averageRate : averageRate.toFixed(1);

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
        <div>
          <Rate allowHalf value={value} disabled />
          <span>{averageRate}</span>
        </div>
        <button onClick={toggleOpenList}>
          {isReviewsOpen ? "Close reviews" : "Open reviews"}
        </button>
        {isReviewsOpen ? <RestaurantReviews reviews={reviews} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default opener(Restaurant);
