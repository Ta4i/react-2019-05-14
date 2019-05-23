import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { Row, Col } from "antd/lib/grid";
import PropTypes from "prop-types";

class RestaurantList extends Component {
  render() {
    const { restaurants, openItemId, toggleOpenItem } = this.props;
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

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func
};

export default accordion(RestaurantList);
