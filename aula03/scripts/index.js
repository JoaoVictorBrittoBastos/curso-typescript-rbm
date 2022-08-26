"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const model_1 = __importDefault(require("./model"));
const view_1 = __importDefault(require("./view"));
const ViewInstance = new view_1.default();
const ModelInstance = new model_1.default();
const ControllerInstance = new controller_1.default(ViewInstance, ModelInstance);
