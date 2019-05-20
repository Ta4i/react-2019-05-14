import React, { Component } from "react";

const collapse = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isOpen: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  };

export { collapse };
