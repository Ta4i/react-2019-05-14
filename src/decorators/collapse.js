// HOC - higher order component
import React, { Component } from "react";

const collapse = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isItemOpen: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          collapseItem={this.toggleHandler}
        />
      );
    }

    toggleHandler = () => {
      const { isItemOpen } = this.state;

      this.setState({
        isItemOpen: !isItemOpen
      });
    };
  };

export { collapse };
