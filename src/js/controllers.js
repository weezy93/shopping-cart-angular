'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.greeting = "Hello World!";
  $scope.teas = shoppingCartService.getItems();
  $scope.addItemToCart = function (tea) {
    shoppingCartService.addItemToCart(tea);
    console.log(shoppingCartService.cart);
  };
}])
.controller('cartController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.cart = shoppingCartService.cart;
}]);
