import { Model, View } from "../types/classes";

import { Product } from "../types/product";

export default class Controller {
  View: any;
  Model: any;
  constructor(View: View, Model: Model) {
    this.View = View;
    this.Model = Model;
  }

  addProductToList() {
    this.View.renderProduct();
  }

  generateUniqueId(products: Product[]) {
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
