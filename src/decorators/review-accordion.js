// HOC - higher order component
import React, { Component } from "react";

const reviewAccordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openedReviewsItemId: null
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
        openedReviewsItemId: id
      });
    };
  };

export { reviewAccordion };
