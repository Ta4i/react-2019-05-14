import React from 'react';
import RestaurantList from '../restaurant-list';
import { Col } from 'antd';

function RestaurantsPage(props) {
  return (
    <Col span={14} style={{ padding: 24 }}>
      <RestaurantList i18n={props.i18n} />
      {/*<RestaurantList restaurants={props.restaurants} />*/}
    </Col>
  );
}

export default RestaurantsPage;
