var teas = require('./data.js');

// var categories = teas.map(function (tea) {
//   return tea.categories;
// }).map(function (obj) {
//   return obj;
// });
// .reduce(function (prev, curr) {
//   console.log(prev, curr);
// });


var getCategories = function () {
    return Object.keys(teas.reduce(function (object, current) {
      current.categories.forEach(function (category) {
        object[category] = 1;
      });
      return object;
    }, {}));
  };

console.log(getCategories());
