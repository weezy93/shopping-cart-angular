'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {

  $scope.chooseQuantity = shoppingCartService.quantity;
  $scope.searchCategory = '';
  $scope.teas = shoppingCartService.getItems();
  $scope.categories = shoppingCartService.categories;
  $scope.addItemToCart = function (tea, quantity) {
    shoppingCartService.addItemToCart(tea, quantity);
  };
}])

.controller('cartController', ['$scope', '$location', 'shoppingCartService', function ($scope, $location, shoppingCartService) {
  $scope.checkout = true;
  $scope.cart = shoppingCartService.cart;
  $scope.chooseQuantity = shoppingCartService.quantity;

  $scope.addItemToCart = function (id, quantity) {
    shoppingCartService.addItemToCart(id, quantity);
  };

  $scope.deleteFromCart = function (tea) {
    shoppingCartService.deleteFromCart(tea);
  };

  $scope.deleteAllFromCart = function () {
    console.log(shoppingCartService.deleteAllFromCart());
    $location.url('/#/');
  };
}]);
