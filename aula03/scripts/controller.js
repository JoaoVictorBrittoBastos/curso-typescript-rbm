var Controller = /** @class */ (function () {
    function Controller(View, Model) {
        this.View = View;
        this.Model = Model;
    }
    Controller.prototype.addProductToList = function () {
        this.View.renderProduct();
    };
    Controller.prototype.generateUniqueId = function (products) {
        var ids = products.map(function (product) {
            return product.id;
        });
        var sortedIds = ids.sort(function (a, b) {
            return a - b;
        });
        var lastId = sortedIds[sortedIds.length - 1];
        return lastId + 1;
    };
    return Controller;
}());
export default Controller;
