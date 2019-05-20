// HOC - higher order component
import React, { Component } from "react";

const openclose = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isOpenItem: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          openItem={this.openItem}
        />
      );
    }

    openItem = id => {
      this.setState({
        isOpenItem: !this.state.isOpenItem
      });
    };
  };

export { openclose };
