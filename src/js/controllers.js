app.controller('productController', ['$scope', 'shoppingCartService', function($scope) {
  $scope.greeting = "Hello World!";
  $scope.products = shoppingCartService.getItems();
}])
.controller('cartController', ['$scope', 'shoppingCartService', function ($scope) {
  $scope.cart = [];
}]);
