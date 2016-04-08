app.config(function ($routeProvider) {
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'productController'
  })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'cartController'
  })
  .otherwise('/');
});
