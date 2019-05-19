import React, { Component } from "react";

const reviewsAccordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openReviewsRestaurantId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenReviewsItem={this.toggleOpenReviewsItem}
        />
      );
    }

    toggleOpenReviewsItem = id => {
      this.setState({
        openReviewsRestaurantId: id
      });
    };
  };

export { reviewsAccordion };
