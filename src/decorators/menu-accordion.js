// HOC - higher order component
import React, { Component } from "react";

const menuAccordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      openedMenuItemId: null
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
