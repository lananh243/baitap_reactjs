"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Child_Component_1 = __importDefault(require("./Child_Component"));
class Parent_Component extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: "John",
                    address: "Hà Nội",
                    email: "john@gmail.com",
                },
                {
                    id: 2,
                    name: "Linda",
                    address: "Hà Nam",
                    email: "linda@gmail.com",
                }
            ]
        };
    }
    render() {
        return (<div>Bài 6
        <Child_Component_1.default a={this.state.users}></Child_Component_1.default>
      </div>);
    }
}
exports.default = Parent_Component;
