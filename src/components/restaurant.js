import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import Rate from "antd/lib/rate";
import RestaurantReviews from "./restaurant-reviews";
import { opener } from "../decorators/opener";
import { ratingCalculate } from "../decorators/cashing-one";

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

    const ratings = reviews.map(review => review.rating);
    const { averageRate, value } = ratingCalculate(name, ratings);

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
