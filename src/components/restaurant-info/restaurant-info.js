import React from "react";
import { Card } from "antd";
import { restaurantSelector } from "../../selectors/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function RestaurantInfo({ restaurant }) {
  if (!restaurant) {
    return null;
  }

  return (
    <Card title={restaurant.name} bordered={false}>
      <p>Kinda description here.</p>
    </Card>
  );
}

RestaurantInfo.propTypes = {
  id: PropTypes.any.isRequired
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props)
});

export default connect(mapStateToProps)(RestaurantInfo);
