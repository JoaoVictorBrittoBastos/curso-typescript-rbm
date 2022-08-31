export default class View {
    constructor(Controller, Model) {
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
    addProduct() { }
    eventListenerHandle() {
        const formButtonElement = document.getElementById("addButton");
        const deleteButtons = Array.from(document.getElementsByClassName("delete-button"));
        deleteButtons.forEach((button) => {
            const buttonId = parseInt(button.value);
            button.addEventListener("click", () => this.handleDeleteItem(buttonId));
        });
        formButtonElement === null || formButtonElement === void 0 ? void 0 : formButtonElement.addEventListener("click", () => {
            const nameElement = document.getElementById("nameInput");
            const brandElement = document.getElementById("brandInput");
            const priceElement = document.getElementById("priceInput");
            const categoryElement = document.getElementById("categoryInput");
            const activeElement = document.getElementById("activeInput");
            const quantityElement = document.getElementById("quantityInput");
            const newProduct = {
                active: true,
                brand: brandElement.value,
                category: categoryElement.value,
                id: this.Controller.generateUniqueId(),
                name: nameElement.value,
                price: parseInt(priceElement.value),
                quantity: parseInt(quantityElement.value),
            };
            this.Controller.addItemToPersistentStorage(newProduct);
            this.renderProduct();
        });
    }
    handleDeleteItem(id) {
        console.log(id);
        this.Controller.deleteItemFromPersistentStorage(id);
    }
}
