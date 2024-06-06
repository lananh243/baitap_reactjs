"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import Header from './components/Header'
// import Main from './components/Main'
// import Login from "./components/login/Login";
require("./components/header.scss");
const Header_1 = __importDefault(require("./components/export/Header"));
const Menu_1 = __importDefault(require("./components/export/Menu"));
const Navba_1 = __importDefault(require("./components/export/Navba"));
const Modal_1 = __importDefault(require("./components/export/Modal"));
const Form_1 = __importDefault(require("./components/export/Form"));
function App() {
    return (<div>
        {/* <Header></Header> */}
        {/* <Main></Main> */}
        {/* <Login></Login> */}
        <Header_1.default></Header_1.default>
        {/* npm i react-icons */}
        <div className="flex">
          <Menu_1.default></Menu_1.default>
          <br /><br />
          <div className="flex flex-col w-[100%]">
            <Navba_1.default></Navba_1.default>
            <Modal_1.default></Modal_1.default>
            <div className="flex py-2 px-6 bg-gray-200 w-full h-[800px]">
              <Form_1.default></Form_1.default>
            </div>
          </div>
      </div>
    </div>);
}
exports.default = App;
