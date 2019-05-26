export default (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id } = action.payload;
      return {
        visible: cartState.visible,
        dishes: {
          ...cartState.dishes,
          [id]: cartState.dishes[id] ? cartState.dishes[id] + 1 : 1
        }
      };
    }
    case 'REMOVE_FROM_CART': {
      const { id, remove } = action.payload;
      const { dishes } = cartState;
      const newDishes = {
        ...dishes
      };
      if (newDishes[id] === 1 || remove) {
        delete newDishes[id];
      } else if (newDishes[id]) {
        newDishes[id] -= 1;
      }
      return {
        visible: cartState.visible,
        dishes: newDishes
      };
    }
    case 'OPEN_CART':
      return {
        visible: !cartState.visible,
        dishes: {
          ...cartState.dishes
        }
      };
    case 'RESET': {
      return {};
    }
    default:
      return cartState;
  }
};
