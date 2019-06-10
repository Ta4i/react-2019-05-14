import React from 'react';
import RestaurantList from '../restaurant-list';
import { Col } from 'antd';

function RestaurrantsPage(props) {
  return (
    <Col span={14} style={{ padding: 24 }}>
      <RestaurantList />
      {/*<RestaurantList restaurants={props.restaurants} />*/}
    </Col>
  );
}

export default RestaurrantsPage;
