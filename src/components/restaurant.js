import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantRating from "./restaurant-rating";
import RestaurantReviewList from "./restaurant-review-list";
import ToggleButton from "./toggle-button";
import { Row, Col, Card, Avatar } from "antd";
import Title from "antd/lib/typography/Title";

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
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    return (
      <Card
        title={
          <Title level={2}>
            <Avatar size="large" shape="square" src={image} />
            {name}
          </Title>
        }
      >
        <Row>
          <Col>
            Rating:
            <RestaurantRating defaultValue={averageRating} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ToggleButton
              onClick={this.handleToggleOpenMenu}
              isOpened={isMenuOpened}
              label="Menu"
            />
            {isMenuOpened && <RestaurantMenu menuItems={menu} />}
          </Col>
          <Col>
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
