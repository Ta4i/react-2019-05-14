// HOC - higher order component
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openedMenuItemId: null,
      openedReviewsItemId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenMenuItem={this.toggleOpenMenuItem}
          toggleOpenReviewsItem={this.toggleOpenReviewsItem}
        />
      );
    }

    toggleOpenMenuItem = id => {
      this.setState({
        openedMenuItemId: id
      });
    };

    toggleOpenReviewsItem = id => {
      this.setState({
        openedReviewsItemId: id
      });
    };
  };

export { accordion };
