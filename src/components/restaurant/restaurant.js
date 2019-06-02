import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChickenLegIcon from '../chicken-leg';
import { Card, Rate, Avatar, Tabs, Badge } from 'antd';
import RestaurantMenu from '../restaurant-menu/restaurant-menu';
import ReviewList from '../review-list/review-list';
import toggle from '../../decorators/toggle';
import { createAvarageRateSelector } from '../../selectors';

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
    const {
      id,
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isToggle: isReviewsToggle,
      rate
    } = this.props;

    return (
      <Card size="small">
        <Meta
          avatar={<Avatar shape="square" src={image} size={48} alt={name} />}
          title={name}
          description={
            <Rate
              character={<ChickenLegIcon theme="filled" />}
              count={this.#defaultRateCount}
              value={rate}
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
            {isReviewsToggle ? <ReviewList restaurantId={id} reviews={reviews} /> : null}
          </TabPane>
        </Tabs>
      </Card>
    );
  }

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
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  isMenuOpen: PropTypes.bool,
  isToggle: PropTypes.bool,
  toggleOpenMenu: PropTypes.func,
  handleToggleItem: PropTypes.func,
  rate: PropTypes.number
};

const initMapStateToProps = () => {
  const rateSelector = createAvarageRateSelector();

  return (state, ownProps) => {
    return {
      rate: rateSelector(state, ownProps)
    };
  };
};

export default connect(initMapStateToProps)(toggle(Restaurant));
