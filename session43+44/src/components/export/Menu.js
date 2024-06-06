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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Menu() {
    const [showOptions, setShowOptions] = (0, react_1.useState)(false);
    return (<div>
      <div className="w-[300px] h-[1000px] bg-black px-10 py-8">
        <button className="text-black bg-white flex items-center gap-3 border-solid border-2 border-black-600 w-[200px] h-[35px] rounded-lg">
          <span className="material-symbols-outlined"> add </span>
          New Item
        </button>
        <br />
        <div className="w-[200px] bg-black text-white">
          <div className="flex items-center justify-between py-2 bg-black">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Dashboard</span>
            <span onClick={() => setShowOptions(!showOptions)} className="material-symbols-outlined">
              arrow_drop_down
            </span>
          </div>
          {showOptions && (<ul className="bg-black px-16">
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">
                Commarce
              </li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">
                Analytics
              </li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Cyrpto</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">
                Helpdesk
              </li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">
                Monitoring
              </li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Fitnes</li>
            </ul>)}
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Application</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Elements</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center justify-between py-2 bg-black">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Forms</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Plugins</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Elements</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Datagrid</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <br />
          <div className="flex items-center py-2 bg-black justify-between">
            <span className="material-symbols-outlined">view_cozy</span>
            <span>Settings</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Menu;
