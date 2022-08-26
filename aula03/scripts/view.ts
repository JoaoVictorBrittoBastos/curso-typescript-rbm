import { Product } from "../types/product";

export default class View {
  constructor() {}

  renderProduct(product: Product) {
    const productListElement = document.getElementById("product-list");
    if (productListElement) {
      productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
    }
  }
}
