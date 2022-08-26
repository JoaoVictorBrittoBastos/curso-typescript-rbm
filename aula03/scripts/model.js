"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() { }
    saveProductToLocalStorage(product) {
        var _a;
        const productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
        const newProductsLocalstorage = [...productsLocalStorage, product];
        localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
    }
}
exports.default = Model;
