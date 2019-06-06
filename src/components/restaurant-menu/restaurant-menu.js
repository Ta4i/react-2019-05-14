import React, { useEffect } from "react";
import Dish from "../dish";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { dishesSelector } from "../../selectors";
import { loadDishes } from "../../ac";

function RestaurantMenu(props) {
  useEffect(() => {
    console.log("------", props.isDishesLoaded);
    if (!props.isDishesLoaded) props.fetchDishes();
  });
  return (
    <div data-automation-id="menu" className="restaurant-menu">
      <Row gutter={16}>
        {props.menu.map(dishId => (
          <Col key={dishId} span={8}>
            <Dish id={dishId} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(
  state => ({ isDishesLoaded: dishesSelector(state).length > 0 }),
  { fetchDishes: loadDishes }
)(RestaurantMenu);
