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
function Bai3() {
    const tabs = [
        {
            id: 1,
            title: "Trang chủ",
        },
        {
            id: 2,
            title: "Liên hệ",
        },
        {
            id: 3,
            title: "Giới thiệu",
        },
        {
            id: 4,
            title: "Đăng nhập",
        },
    ];
    const [active, setActive] = (0, react_1.useState)(1);
    const handleChangeTab = (id) => {
        setActive(id);
    };
    return (<div>
      <h1>Bài 3</h1>
      <div style={{ display: "flex", gap: 50 }}>
        {tabs.map((tab) => (<span className={`${active === tab.id ? "active" : ""}`} onClick={() => handleChangeTab(tab.id)}>
            {tab.title}
          </span>))}
      </div>
    </div>);
}
exports.default = Bai3;
