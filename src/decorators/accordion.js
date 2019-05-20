// HOC - higher order component
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openItemId: null,
      openItemName: null
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

    toggleOpenItem = (id, itemName) => {
      const { openItemId, openItemName } = this.state;

      if (openItemId === id && openItemName === itemName) {
        this.setState({
          openItemId: null,
          openItemName: null
        });
      } else {
        this.setState({
          openItemId: id,
          openItemName: itemName
        });
      }
    };
  };

export { accordion };
