// // create custom filter to change instock true/false to 'heck yes' or sorry, no
'use strict';
angular.module('shoppingCartApp')
// .filter('fixPrice', function() {
//   return function (input) {
//     var splitInput = input.split('');
//     var index = splitInput.length - 2;
//     splitInput.splice(index, 0, '.');
//     return splitInput.join();
//   };
// })
.filter('inStock', function () {
  return function (input) {
    if (input === true) {
      return 'You bet!';
    } else {
      return 'Sorry, no';
    }
  };
});
