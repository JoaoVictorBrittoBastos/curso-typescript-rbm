var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.renderProduct = function (product) {
        var productListElement = document.getElementById("product-list");
        if (productListElement) {
            productListElement.innerHTML += "<div class=\"product-item\">".concat(product.name, " - R$").concat(product.price, " - ").concat(product.quantity, "</div>");
        }
    };
    View.prototype.addProduct = function () { };
    View.prototype.eventListenerHandle = function () {
        var _this = this;
        var formButtonElement = document.getElementById("addButton");
        formButtonElement === null || formButtonElement === void 0 ? void 0 : formButtonElement.addEventListener("click", function () {
            var nameElement = document.getElementById("nameInput");
            var brandElement = document.getElementById("brandInput");
            var priceElement = document.getElementById("priceInput");
            var categoryElement = document.getElementById("categoryInput");
            var activeElement = document.getElementById("activeInput");
            var quantityElement = document.getElementById("quantityInput");
            _this.renderProduct({
                active: true,
                brand: brandElement.value,
                category: categoryElement.value,
                id: 1,
                name: nameElement.value,
                price: parseInt(priceElement.value),
                quantity: parseInt(quantityElement.value),
            });
        });
    };
    return View;
}());
export default View;
