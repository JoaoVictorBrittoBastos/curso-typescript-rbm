"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor() { }
    renderProduct(product) {
        const productListElement = document.getElementById("product-list");
        if (productListElement) {
            productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
        }
    }
}
exports.default = View;
