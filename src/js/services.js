angular.module('shoppingCartApp')
.service('shoppingCartService', [function () {
  return {
    cart : [{
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"],
        "quantity": 1
    }],
    quantity: [
          {"value": 1},
          {"value": 2},
          {"value": 3},
          {"value": 4},
          {"value": 5},
          {"value": 6},
          {"value": 7},
          {"value": 8},
          {"value": 9},
          {"value": 10},
    ],
    categories: [
          { 'category': 'dark' },
          { 'category': 'cold' },
          { 'category': 'awesome' },
          { 'category': 'dry' },
          { 'category': 'hot' },
          { 'category': 'summer' },
          { 'category': 'lucid' },
          { 'category': 'warm' },
          { 'category': 'winter' },
          { 'category': 'spring' }
    ],
    getItems: function () {
      return teas;
    },
    getCategories : function () {
        return Object.keys(teas.reduce(function (object, current) {
          current.categories.forEach(function (category) {
            object[category] = 1;
          });
          return object;
        }, {}));
      },
    addItemToCart: function (tea, quantity) {
      if (this.cart.indexOf(tea) !== -1) {
        var index = this.cart.indexOf(tea);
        this.cart[index].quantity = quantity || 1;
      } else {
        tea.quantity = quantity || 1;
        this.cart.push(tea);
      }
      return this.cart;
    },
    deleteFromCart: function (tea) {
      var index = this.cart.indexOf(tea);
      this.cart.splice(index, 1);
      return this.cart;
    },
    deleteAllFromCart: function () {
      this.cart = [];
      console.log(this.cart);
      return this.cart;
    }
  };
}]);
