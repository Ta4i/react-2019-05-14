import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { Row, Col } from "antd";

class RestaurantList extends Component {
  render() {
    const { restaurants, openItemID, toggleOpenItem } = this.props;
    return (
      <div>
        <Row gutter={16} style={{ padding: "16px" }}>
          {restaurants.map(restaurant => (
            <Col
              key={restaurant.id}
              className="gutter-row"
              style={{ marginBottom: "16px" }}
            >
              <Restaurant
                {...restaurant}
                isMenuOpen={openItemID === restaurant.id}
                toggleOpenMenu={toggleOpenItem}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default accordion(RestaurantList);
