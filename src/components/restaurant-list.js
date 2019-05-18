import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { Row, Col } from "antd/lib/grid";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;
    return (
      <Row gutter={24}>
        {restaurants.map(restaurant => (
          <Col span={6} key={restaurant.id}>
            <Restaurant
              {...restaurant}
              isMenuOpen={openItemId === restaurant.id}
              toggleOpenMenu={toggleOpenItem}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default accordion(RestaurantList);
