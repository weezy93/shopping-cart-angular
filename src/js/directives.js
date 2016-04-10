'use strict';

angular.module('shoppingCartApp')
.directive('myHeader', function () {
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
  }
})
.directive('teaCategories', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/teaCategories.html'
  }
})
.directive('deleteItem', function () {
  return {
    restrict: 'E',
    templateUrl: '../directives/deleteItem.html'
  }
});
