import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviewsPanel from "./restaurant-reviews-panel";
import RestaurantRating from "./restaurant-rating";
import { openclose } from "../decorators/openclose";
import { Button } from "antd";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      isMenuOpen,
      reviews,
      isOpenItem,
      openItem
    } = this.props;

    return (
      <div className="restaurant">
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <p>
          <RestaurantRating key={this.props.id} reviews={reviews} />
        </p>
        <Button type="primary" onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </Button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        <RestaurantReviewsPanel
          key={this.props.id}
          reviews={reviews}
          isReviewsOpen={isOpenItem}
          openReviews={openItem}
        />
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default openclose(Restaurant);
