import React, { Component } from "react";

const openList = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isReviewsOpen: false
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

    toggleOpenItem = isReviewsOpen => {
      const newState = !isReviewsOpen;
      this.setState({
        isReviewsOpen: newState
      });
    };
  };

export { openList };
