app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'productController'
  })
  // .when('/about', {
  //   templateUrl: 'partials/about.html'
  // })
  // .when('/contact', {
  //   templateUrl: 'partials/about.html'
  // })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'cartController'
  })
  .otherwise('/');
});
