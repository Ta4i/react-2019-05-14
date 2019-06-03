import React from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { averageRatingSelector } from "../../selectors";

function AverageRating(props) {
  return <Rate defaultValue={props.rating} disabled allowHalf />;
}

AverageRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default connect((state, ownProps) => ({
  rating: averageRatingSelector(state, ownProps)
}))(AverageRating);
