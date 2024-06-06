"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Modal() {
    return (<div>
        <div className="flex items-center py-2 px-6 bg-gray-200 justify-between w-full h-[150px]">
          <div className="bg-white p-3 rounded shadow flex items-center">
            <span className="material-symbols-outlined text-orange-500">shopping_bag</span>
            <div className="ml-4 w-[180px]">
              <div>Total Sales</div>
              <div className="text-2xl font-bold">$2,456</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded shadow flex items-center">
            <span className="material-symbols-outlined text-purple-500">store</span>
            <div className="ml-4 w-[180px]">
              <div>Total Expenses</div>
              <div className="text-2xl font-bold">$3,326</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded shadow flex items-center">
            <span className="material-symbols-outlined text-green-500">group</span>
            <div className="ml-4 w-[180px]">
              <div>Total Visitors</div>
              <div className="text-2xl font-bold">5,325</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded shadow flex items-center">
            <span className="material-symbols-outlined text-pink-500">assignment</span>
            <div className="ml-4 w-[180px] ">
              <div>Total Orders</div>
              <div className="text-2xl font-bold">1,326</div>
            </div>
          </div>
        </div>
      </div>);
}
exports.default = Modal;
