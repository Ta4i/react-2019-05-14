import React, { useEffect } from "react";
import { List } from "antd";
import Review, { ReviewPropType } from "../review";
import PropTypes from "prop-types";
import { createReviewsSelector, usersSelector } from "../../selectors";
import { connect } from "react-redux";
import AddReview from "../add-review";
import { loadUsers } from "../../ac";

function ReviewList(props) {
  const {
    reviews,
    id,
    loadUsers,
    users,
  } = props;

/* Хотел грузить по мере надобности данные, что в больш. случаев логично
*  но в данном проекте есть ощущение, что это не совсем правильно
*  ибо если список юзеров пустой (его просто нет), то компонент при каждом маунтинге будет делать новый запрос на сервер
*  хотелось бы прояснений по этим мыслям (на всякий оставил текущую реализацию)
* */
  useEffect(() => {
    if (!users.length) {
      loadUsers && loadUsers();
    }
  }, []);

  return (
    <List data-automation-id="review-list">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
      <AddReview restaurantId={id} />
    </List>
  );
}

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewPropType))
};

const initMapStateToProps = () => {
  const reviewsSelector = createReviewsSelector();
  return (state, ownProps) => {
    return {
      reviews: reviewsSelector(state, ownProps),
      users: usersSelector(state),
    };
  };
};

export default connect(
  initMapStateToProps,
  {
    loadUsers,
  }
)(ReviewList);
