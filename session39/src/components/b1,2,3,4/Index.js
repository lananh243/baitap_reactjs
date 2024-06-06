"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const react_1 = require("react");
const Content_1 = __importDefault(require("./Content"));
exports.ThemeContext = (0, react_1.createContext)(null);
function Index() {
    const [theme, setTheme] = (0, react_1.useState)("light");
    const toggleMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (<div>
      <exports.ThemeContext.Provider value={{ toggleMode, theme }}>
        <Content_1.default /> 
      </exports.ThemeContext.Provider>
    </div>);
}
exports.default = Index;
