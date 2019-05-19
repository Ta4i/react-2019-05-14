import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import Reviews from "./reviews";
import { Card } from "antd";
import Rate from "antd/lib/rate";

const { Meta } = Card;

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      reviews,
      menu,
      isMenuOpen,
      isReviewsOpen
    } = this.props;
    /* 
      Проверяем что reviews это массив, затем
      считаем среднее арифметическое по всем ревью
      и округляем до 0.5 иначе Rate не корректо показывает половины рейтинга
    */
    const rating = Array.isArray(reviews)
      ? Math.round(
          (reviews.reduce((acc, curr) => acc + curr.rating, 0) /
            reviews.length) *
            2
        ) / 2
      : 0;

    return (
      <Card style={{ width: 300 }} cover={<img src={image} alt={name} />}>
        <Meta
          title={name}
          description={
            <div className="card-description">
              <Rate allowHalf disabled value={rating} defaultValue={0} />
              <button onClick={this.handleToggleOpenClick}>
                {isMenuOpen ? "Close menu" : "Open menu"}
              </button>
              {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
              <button onClick={this.handleToggleReviewsClick}>
                Open reviews
              </button>
              {isReviewsOpen ? <Reviews reviews={reviews} /> : null}
            </div>
          }
        />
      </Card>
    );
  }

  handleToggleOpenClick = () => {
    // если меню не открыто, то передаем id ресторана,
    // если открыто, то null, что бы закыть
    const id = !this.props.isMenuOpen ? this.props.id : null;
    this.props.toggleOpenMenu(id);
  };

  handleToggleReviewsClick = () => {
    const id = !this.props.isReviewsOpen ? this.props.id : null;
    this.props.toggleOpenReviews(id);
  };
}

export default Restaurant;
