import React from "react";
import Dish from "./dish";
import { Row, Col } from "antd";
import { PropTypes } from "prop-types";

function RestaurantMenu({ menu }) {
  return (
    <div data-aid="menu" style={{ padding: "16px" }}>
      <Row gutter={16}>
        {menu.map(dish => (
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
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default RestaurantMenu;
