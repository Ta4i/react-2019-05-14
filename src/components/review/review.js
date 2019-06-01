import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Comment } from 'antd';
import { createReviewSelector } from '../../selectors';

export function Review(props) {
  const { id, user, text } = props;
  return (
    <li key={id}>
      <Comment author={user.name} content={<p>{text}</p>} />
    </li>
  );
}

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object,
  text: PropTypes.string
};

const initMapStateToProps = () => {
  const reviewSelector = createReviewSelector();

  return (state, ownProps) => {
    return {
      ...reviewSelector(state, ownProps)
    };
  };
};

export default connect(initMapStateToProps)(Review);
