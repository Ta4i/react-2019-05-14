import React, { Component } from 'react';

const toggle = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isToggle: false
    };

    render() {
      return (
        <OriginalComponent {...this.props} {...this.state} handleToggleItem={this.toggleItem} />
      );
    }

    toggleItem = () => {
      this.setState({
        isToggle: !this.state.isToggle
      });
    };
  };

export default toggle;
