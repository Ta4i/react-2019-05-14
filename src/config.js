export default {
  appElement: 'root',
  defaultStore: {
    user: {
      name: 'Anonymous',
      email: '',
      address: ''
    },
    cart: {
      visible: false,
      total: 0,
      dishes: {}
    }
  }
};
