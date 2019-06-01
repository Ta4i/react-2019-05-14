export default {
  appElement: 'root',
  defaultStore: {
    user: {
      id: '',
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
