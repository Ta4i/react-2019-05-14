import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Review from '../review';
import ReviewForm from '../review-form';

class ReviewList extends Component {
  render() {
    const { restaurantId, reviews } = this.props;
    return (
      <>
        <List
          className="comment-list"
          header={`${reviews.length} reviews`}
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={review => <Review id={review} />}
        />
        <ReviewForm restaurantId={restaurantId} />
      </>
    );
  }
}

ReviewList.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.array
};

export default ReviewList;
