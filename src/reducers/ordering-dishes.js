import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ORDER } from "../actionTypes";

const increaseDishesInOrderList = (dish, orderingDishes) => {
  const { id, name, price } = dish;

  const newOrderingDishes = new Map(orderingDishes);

  if (newOrderingDishes.has(id)) {
    const currentOrderByDish = newOrderingDishes.get(id);
    newOrderingDishes.set(id, {
      ...currentOrderByDish,
      number: currentOrderByDish.number + 1,
      price: currentOrderByDish.price + price
    });
  } else {
    newOrderingDishes.set(id, {
      id,
      name,
      number: 1,
      price: price
    });
  }

  return newOrderingDishes;
};

const decreaseDishesInOrderList = (dish, orderingDishes) => {
  const { id, price } = dish;

  if (!orderingDishes.has(id)) {
    return orderingDishes;
  }

  const newOrderingDishes = new Map(orderingDishes);
  const currentOrderByDish = newOrderingDishes.get(id);

  if (currentOrderByDish.number > 1) {
    newOrderingDishes.set(id, {
      ...currentOrderByDish,
      number: currentOrderByDish.number - 1,
      price: currentOrderByDish.price - price
    });
  } else {
    newOrderingDishes.delete(id);
  }

  return newOrderingDishes;
};

const removeDishesFromOrderList = (id, orderingDishes) => {
  const newOrderingDishes = new Map(orderingDishes);
  newOrderingDishes.delete(id);

  return newOrderingDishes;
};

export const orderingDishesReducer = (orderingDishes = new Map(), action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { dish } = action.payload;
      return increaseDishesInOrderList(dish, orderingDishes);
    }
    case REMOVE_FROM_CART: {
      const { dish } = action.payload;
      return decreaseDishesInOrderList(dish, orderingDishes);
    }
    case REMOVE_ORDER: {
      const { id } = action.payload;
      return removeDishesFromOrderList(id, orderingDishes);
    }
    default:
      return orderingDishes;
  }
};
