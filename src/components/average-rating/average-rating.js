import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRatingSelector } from "../../selectors";

class AverageRating extends PureComponent {
  state = {
    value: 0
  };

  render() {
    const { normalizedRating } = this.props;
    return <Rate defaultValue={normalizedRating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  normalizedRating: PropTypes.PropTypes.number.isRequired
};

const initMapStateToProps = () => {
  const ratingSelector = createRatingSelector();

  return (state, ownProps) => ({ ...ratingSelector(state, ownProps) });
};

export default connect(initMapStateToProps)(AverageRating);
