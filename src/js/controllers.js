'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.greeting = "Hello World!";
  $scope.chooseQuantity = shoppingCartService.quantity;

  $scope.teas = shoppingCartService.getItems();
  $scope.addItemToCart = function (tea, quantity) {
    shoppingCartService.addItemToCart(tea, quantity);
    console.log(shoppingCartService.cart);
  };
}])
.controller('cartController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.cart = shoppingCartService.cart;
  console.log($scope.cart);
  $scope.chooseQuantity = shoppingCartService.quantity;
  $scope.updateItemInCart = function (id, quantity) {
    console.log(shoppingCartService.updateItemInCart(id, quantity));
  };
}]);
