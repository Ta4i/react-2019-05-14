import React, { Component } from "react";

const accordionWrapper = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openElementId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenElement={this.toggleOpenElement}
        />
      );
    }

    toggleOpenElement = id => {
      this.setState({
        openElementId: id
      });
    };
  };

export { accordionWrapper };
