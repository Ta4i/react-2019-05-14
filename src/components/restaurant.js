import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChickenLegIcon } from './chicken-leg';
import { Card, Rate, Avatar, Tabs, Badge } from 'antd';
import RestaurantMenu from './restaurant-menu';
import ReviewList from './review-list';
import toggle from '../decorators/toggle';

const { Meta } = Card;
const { TabPane } = Tabs;

class Restaurant extends Component {
  /* private */
  #defaultRateCount = 5;

  state = {
    defaultActiveKey: 'menu'
  };

  render() {
    const { defaultActiveKey } = this.state;
    const { image, name, menu, reviews, isMenuOpen, isToggle: isReviewsToggle } = this.props;

    return (
      <Card size="small">
        <Meta
          avatar={<Avatar shape="square" src={image} size={48} alt={name} />}
          title={name}
          description={
            <Rate
              character={<ChickenLegIcon theme="filled" />}
              count={this.#defaultRateCount}
              value={this.getRate(reviews)}
              disabled
              allowHalf
            />
          }
        />
        <Tabs defaultActiveKey={defaultActiveKey} size="small" onTabClick={this.handleTabClick}>
          <TabPane tab="Menu" key="menu">
            {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
          </TabPane>
          <TabPane
            tab={
              <span>
                Reviews
                <Badge
                  count={reviews.length}
                  style={{
                    margin: '5px',
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset'
                  }}
                />
              </span>
            }
            key="reviews"
          >
            {isReviewsToggle ? <ReviewList reviews={reviews} /> : null}
          </TabPane>
        </Tabs>
      </Card>
    );
  }

  getRate = reviews => {
    const rate = reviews.length
      ? reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length
      : 0;
    return Math.floor(rate) === rate ? rate : Math.floor(rate) + 0.5;
  };

  handleTabClick = key => {
    switch (key) {
      case 'menu': {
        this.handleOpenMenu();
        if (this.props.isToggle) {
          this.handleToggleReviews();
        }
        break;
      }
      case 'reviews': {
        this.handleToggleReviews();
        if (this.props.isMenuOpen) {
          this.handleOpenMenu();
        }
        break;
      }
      default:
    }
  };

  handleOpenMenu = () => {
    this.props.toggleOpenMenu(this.props.id);
  };

  handleToggleReviews = () => {
    this.props.handleToggleItem();
  };
}

Restaurant.propTypes = {
  id: PropTypes.any,
  image: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  isMenuOpen: PropTypes.bool,
  isToggle: PropTypes.bool,
  toggleOpenMenu: PropTypes.func,
  handleToggleItem: PropTypes.func
};

export default toggle(Restaurant);
