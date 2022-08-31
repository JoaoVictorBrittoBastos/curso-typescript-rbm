import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";

const ModelInstance = new Model();
const ControllerInstance = new Controller(ModelInstance);
const ViewInstance = new View(ControllerInstance, ModelInstance);

(function start() {
  ViewInstance.renderProduct();
  ViewInstance.eventListenerHandle();
})();
