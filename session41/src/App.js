"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import UseContext from './components/UseContext'
// import Manager_student from './components/Bth_Session39/Manager_student'
const ListStudent_1 = __importDefault(require("./components/Bth_Session40/ListStudent"));
// import UseMemo from './components/UseMemo'
function App() {
    return (<>
      {/* <UseContext></UseContext> */}
      {/* <UseMemo></UseMemo> */}
      <ListStudent_1.default></ListStudent_1.default>
    </>);
}
exports.default = App;
