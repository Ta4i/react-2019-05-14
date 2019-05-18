// HOC - higher order component
import React, { Component } from "react";

const reviewAccordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openedReviewsItemId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
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
