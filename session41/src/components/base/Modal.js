"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Modal({ title, content, onConfirm, onClose }) {
    return (<>
        {/* Modal xác nhận xóa tài khoản */}
        <div className="overlay">
            <div className="modal-custom">
            <div className="modal-title">
                <h4>{title ? title : "Xác nhận"}</h4>
                <i onClick={onClose} className="fa-solid fa-xmark"/>
            </div>
            <div className="modal-body-custom">
                <span>{content}</span>
            </div>
            <div className="modal-footer-custom">
                <button onClick={onClose} className="btn btn-light">Hủy</button>
                <button onClick={onConfirm} className="btn btn-danger">Xác nhận</button>
            </div>
            </div>
        </div>
    </>);
}
exports.default = Modal;
