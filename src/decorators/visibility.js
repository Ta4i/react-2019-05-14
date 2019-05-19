import React, { Component } from "react";

const visibility = OriginalComponent =>
    class DecoratedComponent extends Component {
        state = {
            isVisible: false,
        };

        render() {
            return <OriginalComponent {...this.props} {...this.state} toggleVisibleItem={this.toggleVisibleItem} />;
        }

        toggleVisibleItem = () => {
            this.setState({
                isVisible: !this.state.isVisible,
            });
        };
    };

export { visibility };
