import React, { Component } from "react";
import { List } from "antd";
import Review, { ReviewPropType } from "../review";
import PropTypes from "prop-types";
import {
  createReviewsSelector,
  isLoadReviews,
  isLoadUsers
} from "../../selectors";
import { connect } from "react-redux";
import AddReview from "../add-review";
import { loadReviews, loadUsers } from "../../ac";
import Spinner from "../spinner";

class ReviewList extends Component {
  componentDidMount() {
    if (!this.props.isLoadUsers) {
      this.props.loadUsers();
    }
  }

  render() {
    if (this.props.isLoadUsers) {
      return (
        <List data-automation-id="review-list">
          {this.props.reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
          <AddReview restaurantId={this.props.id} />
        </List>
      );
    } else {
      return <Spinner />;
    }
  }
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropType))
};

const initMapStateToProps = () => {
  const reviewsSelector = createReviewsSelector();
  return (state, ownProps) => {
    return {
      reviews: reviewsSelector(state, ownProps),
      isLoadUsers: isLoadUsers(state)
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    loadUsers
  }
)(ReviewList);
