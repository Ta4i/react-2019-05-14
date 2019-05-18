import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantRating from "./restaurant-rating";
import RestaurantReviewList from "./restaurant-review-list";
import ToggleButton from "./toggle-button";
import { Row, Col, Card, Avatar, Typography } from "antd";

const { Text } = Typography;

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpened,
      areReviewsOpened
    } = this.props;

    const averageRating =
      reviews &&
      reviews.length > 0 &&
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
      <Card
        size="small"
        title={
          <React.Fragment>
            <Avatar size="large" shape="square" src={image} />
            <Text style={{ fontSize: "22pt" }}>{name}</Text>
            <RestaurantRating defaultValue={averageRating} />
          </React.Fragment>
        }
      >
        <Row gutter={16}>
          <Col span={8}>
            <ToggleButton
              onClick={this.handleToggleOpenMenu}
              isOpened={isMenuOpened}
              label="Menu"
            />
            {isMenuOpened && <RestaurantMenu menuItems={menu} />}
          </Col>
          <Col span={8}>
            <ToggleButton
              onClick={this.handleToggleOpenReviews}
              isOpened={areReviewsOpened}
              label="Reviews"
            />
            {areReviewsOpened && <RestaurantReviewList reviews={reviews} />}
          </Col>
        </Row>
      </Card>
    );
  }

  handleToggleOpenMenu = () => {
    const { isMenuOpened } = this.props;
    this.props.toggleOpenMenu(isMenuOpened ? null : this.props.id);
  };

  handleToggleOpenReviews = () => {
    const { areReviewsOpened } = this.props;
    this.props.toggleOpenReviews(areReviewsOpened ? null : this.props.id);
  };
}

export default Restaurant;
