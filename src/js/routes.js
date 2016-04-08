app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'productController',
    css: './css/main.css'
  })
  // .when('/about', {
  //   templateUrl: 'partials/about.html'
  //  controller: 'aboutController'
  //   css: 'css/about.css'
  // })
  // .when('/contact', {
  //   templateUrl: 'partials/about.html',
  //   controller: 'aboutController',
  //   css: 'css/about.css'
  // })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'cartController',
    css: './css/cart.css'
  })
  .otherwise('/');
});
