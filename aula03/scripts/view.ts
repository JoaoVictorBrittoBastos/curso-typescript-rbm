import { Product } from "../types/product";

export default class View {
  Controller: any;
  Model: any;
  constructor(Controller: any, Model: any) {
    this.Controller = Controller;
    this.Model = Model;
  }

  renderProduct() {
    const productListElement = document.getElementById("product-list");

    if (productListElement) {
      const products = this.Model.getProductsFromLocalStorage();
      productListElement.innerHTML = "";
      for (let i = 0; i < products.length; i++) {
        productListElement.innerHTML += `<li data-item-id=${products[i].id}><div class="product-item"><p>${products[i].name}</p><p> R$${products[i].price}</p><p> ${products[i].quantity}</p><button value=${products[i].id} class="delete-button">delete</button></div></li>`;
      }
    }
  }

  addProduct() {}

  eventListenerHandle() {
    const formButtonElement = document.getElementById("addButton");
    const deleteButtons = Array.from(document.getElementsByClassName("delete-button"));

    deleteButtons.forEach((button) => {
      const buttonId = parseInt((button as HTMLButtonElement).value);
      (button as HTMLButtonElement).addEventListener("click", () => this.handleDeleteItem(buttonId));
    });

    formButtonElement?.addEventListener("click", () => {
      const nameElement = document.getElementById("nameInput");
      const brandElement = document.getElementById("brandInput");
      const priceElement = document.getElementById("priceInput");
      const categoryElement = document.getElementById("categoryInput");
      const activeElement = document.getElementById("activeInput");
      const quantityElement = document.getElementById("quantityInput");

      const newProduct = {
        active: true,
        brand: (brandElement as HTMLInputElement).value,
        category: (categoryElement as HTMLInputElement).value,
        id: this.Controller.generateUniqueId(),
        name: (nameElement as HTMLInputElement).value,
        price: parseInt((priceElement as HTMLInputElement).value),
        quantity: parseInt((quantityElement as HTMLInputElement).value),
      };

      this.Controller.addItemToPersistentStorage(newProduct);
      this.renderProduct();
    });
  }

  handleDeleteItem(id: number) {
    console.log(id);
    this.Controller.deleteItemFromPersistentStorage(id);
  }
}
