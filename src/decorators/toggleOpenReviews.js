import React, { Component } from "react";

const toggleOpenReviews = OriginalComponent =>
  class DecoratorComponent extends Component {
    state = {
      isOpenItem: false
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
    toggleOpenItem = () => {
      this.setState({
        isOpenItem: !this.state.isOpenItem
      });
    };
  };

export { toggleOpenReviews };
