// HOC - higher order component
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class DecoratedComponent extends Component {
    constructor(props) {
      super(props);
      let restaurant = {
        ...props.restaurants.map(restaurant => {
          return restaurant;
        })
      };

      this.state = {
        openItemId: null
      };
    }

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
      if (this.state.openItemId === id) {
        this.setState({
          openItemId: null
        });
      } else {
        this.setState({
          openItemId: id
        });
      }
    };
  };

export { accordion };
