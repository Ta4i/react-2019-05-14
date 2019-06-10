import React from 'react';
import { Col, Row } from 'antd';
import RestaurantsMap from '../restaurants-map';
import PropTypes from 'prop-types';

function OrderCompletePage() {
  return (
    <Col span={8} style={{ padding: 24 }}>
      <Row style={{ padding: 24 }}>
        <span>Thank you! Order Completed!</span>
      </Row>
    </Col>
  );
}

export default OrderCompletePage;
