import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, List } from 'antd/lib/index';

class ReviewList extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <List
        className="comment-list"
        header={`${reviews.length} reviews`}
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={review => (
          <li>
            <Comment author={review.user} content={<p>{review.text}</p>} />
          </li>
        )}
      />
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewList;
