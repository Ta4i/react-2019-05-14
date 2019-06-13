const router = require('express').Router();
const mocks = require('./mock');
const I18n = require('./i18n');

let i18n = new I18n().getInstance();

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get('/restaurants', function(req, res, next) {
  reply(res, mocks.restaurants);
});

router.get('/dishes', function(req, res, next) {
  var id = req.query.id;
  var result = mocks.dishes;
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.menu.map(function(dishId) {
        return mocks.dishes.find(function(dish) {
          return dish.id === dishId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/reviews', function(req, res, next) {
  var id = req.query.id;
  var result = mocks.reviews;
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.reviews.map(function(reviewId) {
        return mocks.reviews.find(function(review) {
          return review.id === reviewId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/users', function(req, res, next) {
  reply(res, mocks.users);
});

router.get('/i18n', function(req, res, next) {
  const { locale } = req.query;
  if (locale) {
    i18n.locale = locale;
  }
  reply(res, i18n.localeData);
});

module.exports = router;
