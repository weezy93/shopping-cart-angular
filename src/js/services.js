angular.module('shoppingCartApp')
.service('shoppingCartService', [function () {
  return {
    cart : [],
    quantity: [
          {"value": 1},
          {"value": 2},
          {"value": 3},
          {"value": 4},
          {"value": 5},
          {"value": 6},
          {"value": 7},
          {"value": 8},
          {"value": 9},
          {"value": 10},
    ],
    getItems: function () {
      return teas;
    },
    addItemToCart: function (tea, quantity) {
      tea.quantity = quantity || 1;
      this.cart.push(tea);
      console.log(this.cart);
      return this.cart;
    },
    deleteFromCart: function (id) {
      if (id) {
        // delete from cart where id
      }
    },
    updateItemInCart: function (id, quantity) {
      return this.cart.every(function (teaObj) {
        if (teaObj.id === id) {
          teaObj.quantity = quantity;
          return teaObj;
        }
      });
    },
  }
}]);
