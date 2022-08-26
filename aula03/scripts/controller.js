"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(View, Model) {
        this.View = View;
        this.Model = Model;
    }
    addProductToList() {
        this.View.renderProduct();
    }
    generateUniqueId(products) {
        const ids = products.map(function (product) {
            return product.id;
        });
        const sortedIds = ids.sort(function (a, b) {
            return a - b;
        });
        const lastId = sortedIds[sortedIds.length - 1];
        return lastId + 1;
    }
}
exports.default = Controller;
