import { Product } from "../types/product";

export default class Model {
  constructor() {}

  saveProductToLocalStorage(product: Product) {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products") ?? "[]");

    const newProductsLocalstorage = [...productsLocalStorage, product];

    localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
  }
}
