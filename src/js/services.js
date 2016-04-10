angular.module('shoppingCartApp')
.service('shoppingCartService', [function () {
  return {
    cart : [],
    getItems: function () {
      return teas;
      //
      // if (id) {
      //   // return single item
      // } else {
      //   // return all items
      // }
    },
    addItemToCart: function (tea) {
      // add to cart
      return this.cart.push(tea);
    },
    deleteFromCart: function (id) {
      if (id) {
        // delete from cart where id
      }
    },
    updateItemInCart: function (id) {
      if (id) {
        // update where id
      }
    },
  }
}]);
