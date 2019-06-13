import React from "react";
import { Card, Button } from "antd";
import "./dish.css";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac";
import Price from "../price";
import { cartSelector, createDishSelector } from "../../selectors";
import { I18nContext } from "../../contexts/translate";

function Dish(props) {
  const { id, amount, increase, decrease, price } = props;
  return (
    <I18nContext.Consumer>
      {value => (
        <Card
          bordered
          actions={[
            <Price value={price} />,
            <>
              <span className="dish-amount">{amount}</span>
              <Button.Group>
                <Button
                  onClick={() => decrease(id)}
                  type="primary"
                  shape="circle"
                  icon="minus"
                />
                <Button
                  onClick={() => increase(id)}
                  type="primary"
                  shape="circle"
                  icon="plus"
                />
              </Button.Group>
            </>
          ]}
        >
          <Card.Meta
            title={value.t(props.name)}
            description={props.ingredients.map(ing => value.t(ing)).join(", ")}
          />
        </Card>
      )}
    </I18nContext.Consumer>
  );
}

const initMapStateToProps = () => {
  const dishSelector = createDishSelector();

  return (state, ownProps) => {
    return {
      amount: cartSelector(state)[ownProps.id] || 0,
      ...dishSelector(state, ownProps)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    increase: increaseCart,
    decrease: decreaseCart
  }
)(Dish);
