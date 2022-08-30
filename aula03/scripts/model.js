var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var Model = /** @class */ (function () {
  function Model() {}
  Model.prototype.saveProductToLocalStorage = function (product) {
    var _a;
    var productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
    var newProductsLocalstorage = __spreadArray(__spreadArray([], productsLocalStorage, true), [product], false);
    localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
  };
  return Model;
})();
export default Model;
