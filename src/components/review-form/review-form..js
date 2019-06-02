import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Comment, Form, Input, Button, Rate, Icon } from 'antd';
import ChickenLegIcon from '../chicken-leg';
import {
  createReview,
  createUser,
  getUser,
  setCurrentUser,
  addReviewToRestaurant
} from '../../actions';
import { currentUserSelector, createRestaurantSelector } from '../../selectors';

const { TextArea } = Input;

class ReviewForm extends Component {
  state = {
    id: '',
    userId: '',
    name: '',
    email: '',
    text: '',
    rating: 0,
    submitting: false
  };

  render() {
    const { create, currentUser } = this.props;
    const { name, email, text, submitting, rating, userId } = this.state;

    let emailComponent;
    if (currentUser.email) {
      emailComponent = <span>{currentUser.email}</span>;
    } else {
      emailComponent = (
        <Input
          type="email"
          placeholder={'Email'}
          value={email}
          size="small"
          onChange={this.handleEmailChange}
        />
      );
    }

    return (
      <Comment
        content={
          <>
            <Form.Item label="Your Name">
              <Input
                placeholder="Enter your username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="small"
                value={currentUser.name && !name ? currentUser.name : name}
                onChange={this.handleNameChange}
              />
            </Form.Item>
            <Form.Item label="Your Email">{emailComponent}</Form.Item>
            <Form.Item label="Review">
              <Rate
                character={<ChickenLegIcon theme="filled" />}
                value={rating}
                allowHalf
                onChange={this.handleRatingChange}
              />
              <TextArea
                size="small"
                placeholder={'Tour comment'}
                value={text}
                onChange={this.handleCommentChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={submitting}
                onClick={() => create({ name, email, text, rating, userId })}
                type="primary"
              >
                Add Comment
              </Button>
            </Form.Item>
          </>
        }
      />
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleCommentChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleRatingChange = value => {
    this.setState({
      rating: value
    });
  };
}

ReviewForm.propTypes = {
  create: PropTypes.func,
  currentUser: PropTypes.object
};

const initMapDispatchToProps = () => {
  return (dispatch, ownProps) => {
    const { currentUser, restaurantId } = ownProps;
    return {
      create: review => {
        const { payload: user } = review.userId
          ? dispatch(getUser(review.userId))
          : dispatch(
              createUser({
                id: review.userId,
                name: review.name,
                email: review.email
              })
            );
        dispatch(setCurrentUser(user));
        const { payload: newReview } = dispatch(
          createReview({
            userId: user.id,
            text: review.text,
            rating: review.rating
          })
        );
        dispatch(addReviewToRestaurant(restaurantId, newReview.id));
      },
      dispatch
    };
  };
};

const initMapStateToProps = () => {
  // const restaurantSelector = createRestaurantSelector();
  return (state, ownProps) => {
    return {
      currentUser: currentUserSelector(state, ownProps)
      // restaurant: restaurantSelector(state, ownProps)
    };
  };
};

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(ReviewForm);
