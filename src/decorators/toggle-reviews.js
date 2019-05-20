import React, { Component } from "react";

const accordionReviews = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openReviewId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleReviewItem={this.toggleReviewItem}
        />
      );
    }

    toggleReviewItem = id => {
      const toggle = id === this.state.openReviewId ? null : id;

      this.setState({
        openReviewId: toggle
      });
    };
  };

export { accordionReviews };
