import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Comment, Form, Input, Button } from 'antd';

const { TextArea } = Input;

class ReviewForm extends Component {
  state = {
    name: '',
    email: '',
    review: '',
    rate: 0,
    submitting: false
  };

  render() {
    const { name, email, review, submitting } = this.state;
    return (
      <Comment
        content={
          <>
            <Form.Item label="Your Name">
              <Input placeholder={'Name'} value={name} onChange={this.handleNameChange} />
            </Form.Item>
            <Form.Item label="Your Email">
              <Input
                type="email"
                placeholder={'Email'}
                value={email}
                onChange={this.handleEmailChange}
              />
            </Form.Item>
            <Form.Item label="Review">
              <TextArea
                placeholder={'Tour comment'}
                value={review}
                onChange={this.handleCommentChange}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" loading={submitting} onClick={this.onSubmit} type="primary">
                Add Comment
              </Button>
            </Form.Item>
          </>
        }
      />
    );
  }
}

ReviewForm.propTypes = {};

export default ReviewForm;
