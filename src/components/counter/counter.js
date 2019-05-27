import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { increase, decrease } from "../../ac";

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{ color: "white" }}>{this.props.countFromStore}</span>
        <Button.Group>
          <Button onClick={this.decreaseQuantity} type="primary" icon="minus" />
          <Button onClick={this.increaseQuantity} type="primary" icon="plus" />
        </Button.Group>
      </div>
    );
  }
  decreaseQuantity = () => {
    this.props.decreaseFromStore();
  };
  increaseQuantity = () => {
    this.props.increaseFromStore();
  };
}

// подключаем
const mapStateToProps = state => ({
  countFromStore: state.count
});

const mapDispatchToProps = {
  increaseFromStore: increase,
  decreaseFromStore: decrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
