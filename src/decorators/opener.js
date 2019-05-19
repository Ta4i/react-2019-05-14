import React, { Component } from "react";

const opener = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isReviewsOpen: false
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenList={this.toggleOpenItem}
        />
      );
    }
    toggleOpenItem = () => {
      this.setState({
        isReviewsOpen: !this.state.isReviewsOpen
      });
    };
  };

export { opener };
