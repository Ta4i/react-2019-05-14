// HOC - higher order component
import React, { Component } from "react";

const openClose = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = { opened: false };

    render() {
      return (
        <div>
          <button onClick={this.changeState}>
            {this.state.opened ? "Close review" : "Open review"}
          </button>
          {this.state.opened && (
            <OriginalComponent {...this.props} {...this.state} />
          )}
        </div>
      );
    }

    changeState = () => {
      this.setState({ opened: !this.state.opened });
    };
  };

export { openClose };
