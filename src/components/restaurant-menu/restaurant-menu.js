import React, { Component } from "react";
import Dish from "../dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import Spinner from "../spinner";

class RestaurantMenu extends Component {
  componentDidMount() {
    this.props.restaurantMenu.length === 0 && this.props.fetchMenu();
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <div data-automation-id="menu" className="restaurant-menu">
        <Row gutter={16}>
          {this.props.menu.map(dishId => (
            <Col key={dishId} span={8}>
              <Dish id={dishId} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default RestaurantMenu;
