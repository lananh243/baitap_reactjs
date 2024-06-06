"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Tabs = ({ activeTab, setActiveTab }) => {
    return (<ul className="nav nav-tabs mb-4 pb-2">
      <li className="nav-item" role="presentation">
        <button className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
          Tất cả
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveTab('completed')}>
          Đã hoàn thành
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={`nav-link ${activeTab === 'incomplete' ? 'active' : ''}`} onClick={() => setActiveTab('incomplete')}>
          Chưa hoàn thành
        </button>
      </li>
    </ul>);
};
exports.default = Tabs;
