import React, { Component } from "react";
import store from "../../store/index";
import { restaurants } from "../../fixtures";
import { connect } from "react-redux";
import Dish from "../dish";
import { increaseCart, decreaseCart } from "../../ac";

class OrderList extends Component {
  render() {
    const { carts, menues, amount } = this.props;
    let dishes = [];
    restaurants.forEach(r => {
      dishes = dishes.concat(r.menu);
    });
    console.log("amount:" + amount);
    return (
      <>
        {dishes
          .filter(d => {
            return Object.keys(carts).includes(d.id);
          })
          .filter(d => carts[d.id] !== 0)
          .map(d => (
            <>
              <Dish key={d.id} {...d} />
            </>
          ))}
        <div>
          Full Order Price:{" "}
          {summer(
            carts,
            dishes.filter(d => {
              return Object.keys(carts).includes(d.id);
            })
          )}
        </div>
      </>
    );
  }
}

const summer = function(carts, dishes) {
  let summ = 0;
  dishes.forEach(d => (summ = summ + carts[d.id] * d.price));
  return summ;
};

const mapStateToProps = function(state) {
  return {
    carts: state.cart,
    menues: state.restaurants.menu
  };
};

export default connect(mapStateToProps)(OrderList);
