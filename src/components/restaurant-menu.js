import React from "react";
import PropTypes from "prop-types";
import Dish from "./dish";
import { Row, Col } from "antd";

function RestaurantMenu(props) {
  return (
    <div data-automation-id="menu" style={{ padding: "16px" }}>
      <Row gutter={16}>
        {props.menu.map(dish => (
          <Col key={dish.id} span={8}>
            <Dish {...dish} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      ingredients: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default RestaurantMenu;
