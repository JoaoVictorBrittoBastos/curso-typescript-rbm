import Controller from "./controller";
import Model from "./model";
import View from "./view";

const ViewInstance = new View();
const ModelInstance = new Model();
const ControllerInstance = new Controller(ViewInstance, ModelInstance);
