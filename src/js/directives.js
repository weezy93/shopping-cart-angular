app.directive('myHeader', function () {
  return {
    restrict: 'E',
    //transclude if image
    templateUrl: '../directives/header.html'
  }
})
.directive('searchBar', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/searchBar.html'
  }
})
.directive('cartItem', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/cartItem.html',
    css: './css/cart.css'
  }
});
