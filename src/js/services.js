app.service('shoppingCartService', [ function () {
  return {
    getItems: function (id) {
      if (id) {
        // return single item
      } else {
        // return all items
      }
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
