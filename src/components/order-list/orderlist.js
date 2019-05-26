import React, { Component } from "react";
import store from "../../store/index";
import { restaurants } from "../../fixtures";
import { connect } from "react-redux";
import Dish from "../dish";
import { increaseCart, decreaseCart } from "../../ac";

class OrderList extends Component {
  render() {
    const { carts, menues } = this.props;
    let dishes = [];
    restaurants.forEach(r => {
      dishes = dishes.concat(r.menu);
    });
    let c = { aaaaa: "dddd" };
    console.log(Object.keys(c)[0]);
    console.log(carts);
    console.log(dishes);
    return (
      <>
        {dishes
          .filter(d => Object.keys(carts).includes(d.id))
          .map(d => (
            <Dish key={d.id} {...d} />
          ))}
      </>
    );
  }
}
const mapStateToProps = function(state) {
  console.log(state.cart);
  console.log(state);
  return {
    carts: state.cart,
    menues: state.restaurants.menu
  };
};

export default connect(mapStateToProps)(OrderList);
