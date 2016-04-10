'use strict';

angular.module('shoppingCartApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'productController'
  })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'cartController',
    css: 'css/cart.css'
  })
  .otherwise('/');
});
