import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RateList from "./rate-list";
import RatingSystem from "./rate";
import { Layout, Icon, Button } from "antd";
const { Content } = Layout;

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, reviews, isMenuOpen, isReviewOpen } = this.props;

    let restarauntRate = reviews.reduce((sum, current) => {
      return sum + current.rating / reviews.length;
    }, 0);

    return (
      <div>
        <Layout className="restaurant-layout">
          <Content className="restaurant-list">
            <div className="restaurant-name">
              <img src={image} width={64} height={64} alt={name} />

              <p className="restaurant-brand">{name}</p>
            </div>
            <div className="rate-restaraunt">
              <RatingSystem defaultValue={restarauntRate} />
            </div>

            <div className="buttons">
              <div className="button-menu">
                <Button onClick={this.handleToggleOpenClick}>
                  {isMenuOpen ? "Close menu" : "Open menu"}
                  <Icon
                    className="icon-menu"
                    type={isMenuOpen ? "caret-up" : "caret-down"}
                  />
                </Button>

                {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
              </div>
              {/*  reviews button */}
              <div className="button-review">
                <Button onClick={this.handleToggleReviewsClick}>
                  {isReviewOpen ? "Close reviews" : "Open reviews"}
                  <Icon type={isMenuOpen ? "caret-up" : "caret-down"} />
                </Button>
                {isReviewOpen ? <RateList reviews={reviews} /> : null}
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };

  handleToggleReviewsClick = () => {
    this.props.toggleReviewOpen(this.props.id);
  };
}

export default Restaurant;
