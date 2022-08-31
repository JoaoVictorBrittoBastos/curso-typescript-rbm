export default class Model {
    constructor() { }
    saveProductToLocalStorage(product) {
        var _a;
        const productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
        const newProductsLocalstorage = [...productsLocalStorage, product];
        localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
    }
    getProductsFromLocalStorage() {
        var _a;
        const productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
        return productsLocalStorage;
    }
    saveProductsToLocalStorage(products) {
        var _a;
        const productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
        const newProductsLocalstorage = [...productsLocalStorage, ...products];
        localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
    }
}
