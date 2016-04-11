'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {

  $scope.chooseQuantity = shoppingCartService.quantity;

  $scope.teas = shoppingCartService.getItems();
  $scope.categories = shoppingCartService.getCategories();

  $scope.addItemToCart = function (tea, quantity) {
    shoppingCartService.addItemToCart(tea, quantity);
  };
}])

.controller('cartController', ['$scope', '$location', 'shoppingCartService', function ($scope, $location, shoppingCartService) {

  $scope.cart = shoppingCartService.cart;
  $scope.chooseQuantity = shoppingCartService.quantity;
  console.log($scope.cart);
  $scope.updateItemInCart = function (id, quantity) {
    shoppingCartService.updateItemInCart(id, quantity);
  };

  $scope.deleteFromCart = function (tea) {
    shoppingCartService.deleteFromCart(tea);
  };

  $scope.deleteAllFromCart = function () {
    console.log(shoppingCartService.deleteAllFromCart());
    $location.url('/#/');
  };
}]);
