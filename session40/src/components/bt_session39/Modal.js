"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal = ({ title, message, confirmAction, cancelAction }) => {
    return (<div className="overlay">
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h5>{title}</h5>
          <i className="fas fa-xmark" onClick={cancelAction}/>
        </div>
        <div className="modal-body-custom">
          <p>{message}</p>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={cancelAction}>Hủy</button>
          <button className="btn btn-danger" onClick={confirmAction}>Xác nhận</button>
        </div>
      </div>
    </div>);
};
exports.default = Modal;
