import { Product } from "../types/product";

export default class View {
  constructor() {}

  renderProduct(product: Product) {
    const productListElement = document.getElementById("product-list");
    if (productListElement) {
      productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
    }
  }

  addProduct() {}

  eventListenerHandle() {
    const formButtonElement = document.getElementById("addButton");

    formButtonElement?.addEventListener("click", () => {
      const nameElement = document.getElementById("nameInput");
      const brandElement = document.getElementById("brandInput");
      const priceElement = document.getElementById("priceInput");
      const categoryElement = document.getElementById("categoryInput");
      const activeElement = document.getElementById("activeInput");
      const quantityElement = document.getElementById("quantityInput");

      this.renderProduct({
        active: true,
        brand: (brandElement as HTMLInputElement).value,
        category: (categoryElement as HTMLInputElement).value,
        id: 1,
        name: (nameElement as HTMLInputElement).value,
        price: parseInt((priceElement as HTMLInputElement).value),
        quantity: parseInt((quantityElement as HTMLInputElement).value),
      });
    });
  }
}
