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
const Function_1 = __importDefault(require("./components/Function"));
const Class_1 = __importDefault(require("./components/Class"));
const Bai1_1 = __importDefault(require("./components/b1/Bai1"));
const Bai2_1 = __importDefault(require("./components/b2/Bai2"));
const Bai3_1 = __importDefault(require("./components/b3/Bai3"));
const Parent_Comp_1 = __importDefault(require("./components/b4/Parent_Comp"));
const Parent_1 = __importDefault(require("./components/b5/Parent"));
const Parent_Component_1 = __importDefault(require("./components/b6/Parent_Component"));
const ListPost_1 = __importDefault(require("./components/b7/ListPost"));
const ListProduct_1 = __importDefault(require("./components/b8/ListProduct"));
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleThemeChange = () => {
            if (this.state.theme === "light") {
                this.setState({ theme: "dark" });
            }
            else {
                this.setState({ theme: "light" });
            }
        };
        this.handleLanguageChange = () => {
            if (this.state.language === "english") {
                this.setState({ language: "vietnamese" });
            }
            else {
                this.setState({ language: "english" });
            }
        };
        this.state = {
            theme: "light",
            language: "english",
        };
    }
    render() {
        const { theme, language } = this.state;
        let backgroundColor = "";
        let textColor = "";
        if (theme === "light") {
            backgroundColor = "white";
            textColor = "black";
        }
        else if (theme === "dark") {
            backgroundColor = "black";
            textColor = "white";
        }
        return (<div>App
        <Function_1.default></Function_1.default>
        <Class_1.default></Class_1.default>
        <Bai1_1.default></Bai1_1.default>
        <Bai2_1.default></Bai2_1.default>
        <Bai3_1.default></Bai3_1.default>
        <Parent_Comp_1.default></Parent_Comp_1.default>
        <Parent_1.default></Parent_1.default>
        <Parent_Component_1.default />
        <ListPost_1.default />
        <ListProduct_1.default />

        <div style={{ backgroundColor, color: textColor }}>
          <h2>Nền : {theme}</h2>
          <h2>Ngôn ngữ : {language}</h2>
          <button onClick={this.handleThemeChange}>Change Theme</button>
        <button onClick={this.handleLanguageChange}>Change Language</button>
        </div>
      </div>);
    }
}
exports.default = App;
