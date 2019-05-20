import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import ReviewsList from "./reviews-list";
import { Card, Avatar, Button, Icon, Rate } from "antd";
import { toggleOpenReviews } from "../decorators/toggleOpenReviews";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, isMenuOpen, reviews, isOpenItem } = this.props;

    let renderBody = null;
    if (isMenuOpen) {
      renderBody = <RestaurantMenu menu={menu} />;
    } else if (isOpenItem) {
      renderBody = <ReviewsList reviews={reviews} />;
    }

    const avarage = (
      reviews.map(review => review.rating).reduce((prev, cur) => prev + cur) /
      reviews.length
    ).toFixed(1);

    return (
      <div>
        <Card
          title={
            <div>
              <Avatar src={image} style={{ marginRight: "8px" }} />
              {name}
              <Rate
                allowHalf
                defaultValue={+avarage}
                style={{ marginLeft: "8px" }}
              />
            </div>
          }
          extra={
            <div>
              <Button
                type="primary"
                onClick={this.handleToggleOpenMenu}
                style={{ marginRight: "8px" }}
              >
                {isMenuOpen ? "Close menu" : "Open menu"}
              </Button>
              <Button onClick={this.handleToggleOpenReview}>
                <Icon type="message" />{" "}
                {isOpenItem ? "Close reviews" : "Open reviews"}
              </Button>
            </div>
          }
          bodyStyle={!isMenuOpen && !isOpenItem ? { padding: 0 } : {}}
        >
          {renderBody}
        </Card>
      </div>
    );
  }
  handleToggleOpenMenu = () => {
    this.setState({
      isOpenItem: false
    });
    this.props.toggleOpenMenu(this.props.isMenuOpen ? null : this.props.id);
  };
  handleToggleOpenReview = () => {
    this.setState({
      isMenuOpen: false
    });
    this.props.toggleOpenMenu(null);
    this.props.toggleOpenItem();
  };
}

export default toggleOpenReviews(Restaurant);
