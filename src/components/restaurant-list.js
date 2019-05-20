import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion-menu";
import { accordionReviews } from "../decorators/accordion-reviews";
import { Layout } from "antd";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem,
      // props from accordion reviews
      openReviewId,
      toggleReviewItem
    } = this.props;
    return (
      <div>
        <Layout>
          <div className="header-reastaraunt">
            <h1 className="content-header">
              <i className="fas fa-utensils" /> Restaraunts{" "}
            </h1>
          </div>

          {restaurants.map(restaurant => (
            <Restaurant
              key={restaurant.id}
              {...restaurant}
              isMenuOpen={openItemId === restaurant.id}
              toggleOpenMenu={toggleOpenItem}
              isReviewOpen={openReviewId === restaurant.id}
              toggleReviewOpen={toggleReviewItem}
            />
          ))}
        </Layout>
      </div>
    );
  }
}

export default accordionReviews(accordion(RestaurantList));
