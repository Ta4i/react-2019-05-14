import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RateList from "./rate-list";
import RatingSystem from "./rate";
import { Layout, Icon, Button } from "antd";
import { accordionReviews } from "../decorators/toggle-reviews";
const { Content } = Layout;

class Restaurant extends PureComponent {
  state = {
    error: null
  };

  componentDidCatch(error) {
    console.error(error);
    this.setState({
      error
    });
  }
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      // isReviewOpen,

      openReviewId: isReviewOpen,
      toggleReviewItem
    } = this.props;

    const restarauntRate = reviews.reduce((sum, current) => {
      return sum + current.rating / reviews.length;
    }, 0);

    return this.state.error ? (
      "not available"
    ) : (
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
                <Button
                  onClick={this.handleToggleOpenClick}
                  data-automation-id={`toggle-menu`}
                >
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
                <Button
                  onClick={toggleReviewItem}
                  data-automation-id={`toggle-review`}
                >
                  {isReviewOpen ? "Close reviews" : "Open reviews"}
                  <Icon type={isReviewOpen ? "caret-up" : "caret-down"} />
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
}
//   handleToggleReviewsClick = () => {
//     this.props.toggleReviewOpen(this.props.id);
//   };
// }

export default accordionReviews(Restaurant);
