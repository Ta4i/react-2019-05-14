import React, { Component } from "react";

const ReviewsDecorator = OriginalComponent => {
  return class extends Component {
    state = {
      openReviews: false
    };

    toggleOpenReviews = () => {
      this.setState({
        openReviews: !this.state.openReviews
      });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenReviews={this.toggleOpenReviews}
        />
      );
    }
  };
};

export default ReviewsDecorator;
