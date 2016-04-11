'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {

  $scope.chooseQuantity = shoppingCartService.quantity;

  $scope.teas = shoppingCartService.getItems();

  $scope.addItemToCart = function (tea, quantity) {
    shoppingCartService.addItemToCart(tea, quantity);
  };
}])

.controller('cartController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {

  $scope.cart = shoppingCartService.cart;
  $scope.chooseQuantity = shoppingCartService.quantity;

  $scope.updateItemInCart = function (id, quantity) {
    console.log(shoppingCartService.updateItemInCart(id, quantity));
  };

  $scope.deleteFromCart = function (tea) {
    shoppingCartService.deleteFromCart(tea);
  };

  $scope.deleteAllFromCart = function () {
    shoppingCartService.deleteAllFromCart();
  };
}]);
