import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import { openCart } from '../../actions';

import OrderList from '../order-list';
import UserForm from '../user-form';

class Cart extends Component {
  state = {
    title: 'Confirm Order',
    confirmLoading: false
  };

  render() {
    const { confirmLoading, title } = this.state;
    const { visible, dishes } = this.props;

    return (
      <Modal
        title={title}
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={confirmLoading} onClick={this.handleOk}>
            Submit
          </Button>
        ]}
      >
        <OrderList dishes={dishes} />
        <UserForm />
      </Modal>
    );
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });

    // TODO: do some stuff with data
    setTimeout(() => {
      this.setState({
        confirmLoading: false
      });
      this.props.close();
      this.props.history.push('/order-complete');
    }, 2000);
  };

  handleCancel = () => {
    this.props.close();
  };
}

Cart.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  dishes: PropTypes.object,
  close: PropTypes.func
};

const mapStateToProps = state => {
  return {
    visible: state.cart.visible,
    dishes: state.cart.dishes
  };
};

export default connect(
  mapStateToProps,
  {
    close: openCart
  }
)(withRouter(Cart));
