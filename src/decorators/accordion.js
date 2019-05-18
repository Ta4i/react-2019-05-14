// HOC - higher order component
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openItemId: null
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

    toggleOpenItem = id => {
      const { openItemId } = this.state;

      const openStatus = id === openItemId ? null : id;

      this.setState({
        openItemId: openStatus
      });
    };
  };

export { accordion };
