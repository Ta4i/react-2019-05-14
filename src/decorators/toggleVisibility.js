// HOC - higher order component
import React, { Component } from "react";

const toggleVisibility = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isOpen1: null,
      isOpen2: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleVisibility1={this.toggleVisibility1}
          toggleVisibility2={this.toggleVisibility2}
        />
      );
    }

    toggleVisibility1 = () => {
      this.setState({
        isOpen1: !this.state.isOpen1
      });
    };

    toggleVisibility2 = () => {
      this.setState({
        isOpen2: !this.state.isOpen2
      });
    };
  };

export { toggleVisibility };
