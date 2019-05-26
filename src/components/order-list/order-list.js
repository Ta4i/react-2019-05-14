import React, { PureComponent } from "react";
import propsTypes from "prop-types";
import { Row, Col } from "antd";

class OrderList extends PureComponent {
  static propTypes = {
    cart: propsTypes.object
  };

  render() {
    const { cart } = this.props;

    return (
      <>
        <Row>
          <Col span={12} offset={6}>
            <h2>Order list</h2>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <ol>
              {Object.keys(cart).map(key => {
                const dish = cart[key];
                return (
                  <li key={dish.id}>
                    <strong>{dish.name}</strong>
                    {` - £${dish.prise}x${dish.amount}`}
                  </li>
                );
              })}
            </ol>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <hr />
            <strong>Total:</strong> £
            {Object.keys(cart).reduce((total, key) => {
              return (total = total + cart[key].prise * cart[key].amount);
            }, 0)}
          </Col>
        </Row>
      </>
    );
  }
}

export default OrderList;
