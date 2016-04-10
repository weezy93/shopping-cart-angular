angular.module('shoppingCartApp')
.service('shoppingCartService', [function () {
  return {
    getItems: function () {
      return teas;
      //
      // if (id) {
      //   // return single item
      // } else {
      //   // return all items
      // }
    },
    addItemToCart: function () {
      // add to cart
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
