import React from "react";
import { connect } from "react-redux";
import { Col, List, Row } from "antd";
import OrderItem from "./order-item";
import "./order-list.css";
import * as PropTypes from "prop-types";

function OrderList(props) {
  const { orderingDishes, totalPrice } = props;

  return (
    <Row>
      <Col span={6} offset={1}>
        <div className="order-list">
          <List
            header={<h2>Order:</h2>}
            footer={
              <div>
                Total price: <span>£{totalPrice}</span>
              </div>
            }
            bordered
            dataSource={orderingDishes}
            renderItem={orderInfo => (
              <List.Item>
                <OrderItem
                  name={orderInfo.name}
                  number={orderInfo.number}
                  id={orderInfo.id}
                />
              </List.Item>
            )}
          />
        </div>
      </Col>
    </Row>
  );
}

OrderList.propTypes = {
  orderingDishes: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired
};

const totalPriceReducer = (acc, orderInfo) => acc + orderInfo.price;

export default connect(store => ({
  orderingDishes: Array.from(store.orderingDishes.values()),
  totalPrice: Array.from(store.orderingDishes.values()).reduce(
    totalPriceReducer,
    0
  )
}))(OrderList);
