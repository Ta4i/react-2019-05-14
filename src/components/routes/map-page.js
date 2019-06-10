import React from 'react';
import { Col, Row } from 'antd';
import RestaurantsMap from '../restaurants-map';
import PropTypes from 'prop-types';

function MapPage(props) {
  const { match } = props;
  return (
    <Col span={8} style={{ padding: 24 }}>
      <Row style={{ padding: 24 }}>
        <RestaurantsMap restaurantId={match.params.id} />
      </Row>
    </Col>
  );
}

MapPage.propTypes = {
  match: PropTypes.object
};

export default MapPage;
