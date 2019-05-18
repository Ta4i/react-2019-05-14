// HOC - higher order component
import React, { Component } from "react";

const menuAccordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openedMenuItemId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenMenuItem={this.toggleOpenMenuItem}
        />
      );
    }

    toggleOpenMenuItem = id => {
      this.setState({
        openedMenuItemId: id
      });
    };
  };

export { menuAccordion };
