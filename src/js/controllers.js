'use strict';

angular.module('shoppingCartApp')
.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.greeting = "Hello World!";
  $scope.teas = shoppingCartService.getItems();
}])
.controller('cartController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.cart = [];
}]);
