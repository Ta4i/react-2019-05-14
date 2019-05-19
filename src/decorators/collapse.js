import React, { Component } from "react";

const collapse = OriginalComponent =>
  class ExpandableComponent extends Component {
    state = {
      expanded: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleExpand={this.handleExpand}
        />
      );
    }

    handleExpand = id => {
      this.setState({
        expanded: !this.state.expanded
      });
    };
  };

export { collapse };
