app.controller('productController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.greeting = "Hello World!";
  $scope.products = shoppingCartService.getItems();
}])
.controller('cartController', ['$scope', 'shoppingCartService', function ($scope, shoppingCartService) {
  $scope.cart = [];
}]);
