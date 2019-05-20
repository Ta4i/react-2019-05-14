// HOC - higher order component
import React, { Component } from "react";

const toggleReviewsDecorator = OriginalComponent =>
  class DecoratedComponentReviews extends Component {
    state = {
      isOpenReview: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleToggleReviews={this.handleToggleReviews}
        />
      );
    }

    handleToggleReviews = () => {
      this.setState({
        isOpenReview: !this.state.isOpenReview
      });
    };
  };
export { toggleReviewsDecorator };
