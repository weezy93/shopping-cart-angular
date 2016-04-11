'use strict';
angular.module('shoppingCartApp')
.filter('fixPrice', function() {
  return function (input) {
    return input / 100;
  };
})
.filter('inStock', function () {
  return function (input) {
    if (input === true) {
      return 'You bet!';
    } else {
      return 'Sorry, no';
    }
  };
});
