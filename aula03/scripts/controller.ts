import { Model } from "../types/classes";
import { Product } from "../types/product";

export default class Controller {
  Model: any;
  constructor(Model: Model) {
    this.Model = Model;
  }

  generateUniqueId() {
    const products: Product[] = this.Model.getProductsFromLocalStorage();
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

  addItemToPersistentStorage(product: Product) {
    const newProduct = { ...product, id: this.generateUniqueId() };

    this.Model.saveProductToLocalStorage(newProduct);
  }

  deleteItemFromPersistentStorage(id: number) {
    const products: Product[] = this.Model.getProductsFromLocalStorage();

    const newProducts = products.filter((product) => product.id !== id);
    console.log(newProducts);
    this.Model.saveProductsToLocalStorage(newProducts);
  }
}
