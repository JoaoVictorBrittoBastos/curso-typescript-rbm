export default class Controller {
    constructor(Model) {
        this.Model = Model;
    }
    generateUniqueId() {
        const products = this.Model.getProductsFromLocalStorage();
        if (products.length) {
            const ids = products.map(function (product) {
                return product.id;
            });
            const sortedIds = ids.sort(function (a, b) {
                return a - b;
            });
            const lastId = sortedIds[sortedIds.length - 1];
            return lastId + 1;
        }
        return 1;
    }
    addItemToPersistentStorage(product) {
        const newProduct = Object.assign(Object.assign({}, product), { id: this.generateUniqueId() });
        this.Model.saveProductToLocalStorage(newProduct);
    }
    deleteItemFromPersistentStorage(id) {
        const products = this.Model.getProductsFromLocalStorage();
        const newProducts = products.filter((product) => product.id !== id);
        console.log(newProducts);
        this.Model.saveProductsToLocalStorage(newProducts);
    }
}
