import React, { Component } from "react";

const toggleVisibilityAccordion = (OriginalComponent, itemIdPropName) =>
  class DecoratedComponent extends Component {
    state = {
      [itemIdPropName]: null
    };

    actions = {
      [`toggleVisibility_${itemIdPropName}`]: id => {
        this.setState({
          [itemIdPropName]: id
        });
      }
    };

    render() {
      return (
        <OriginalComponent {...this.props} {...this.state} {...this.actions} />
      );
    }
  };

export { toggleVisibilityAccordion };
