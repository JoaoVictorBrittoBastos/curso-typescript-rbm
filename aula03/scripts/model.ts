import { Product } from "../types/product";

export default class Model {
  constructor() {}

  saveProductToLocalStorage(product: Product) {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products") ?? "[]");

    const newProductsLocalstorage = [...productsLocalStorage, product];

    localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
  }

  getProductsFromLocalStorage(): Product[] {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products") ?? "[]");

    return productsLocalStorage;
  }

  saveProductsToLocalStorage(products: Product[]) {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products") ?? "[]");

    const newProductsLocalstorage = [...productsLocalStorage, ...products];

    localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
  }
}
