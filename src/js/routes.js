app.config(function ($routeProvider) {
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: ''
  })
  .otherwise('/');
});
