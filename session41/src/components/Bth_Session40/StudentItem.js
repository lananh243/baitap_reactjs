"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function StudentItem({ index, employee, showModal, toggleStatus }) {
    return (<>
        <td>{index + 1}</td>
        <td>{employee.employeeName}</td>
        <td>{employee.dateOfBirth}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {employee.status ? (<>
                        <div className="status status-active"/>
                        <span> Đang hoạt động</span> 
                    </>) : (<>
                        <div className="status status-stop"/>
                        <span> Ngừng hoạt động</span> 
                    </>)}
            
        </div>
        </td>
        <td>
            <span onClick={() => toggleStatus(employee.id)} className="button button-block">
                {employee.status ? "Chặn" : "Bỏ chặn"}
            </span>
        </td>
        <td>
        <span className="button button-edit">Sửa</span>
        </td>
        <td>
        <span onClick={() => showModal(employee.id)} className="button button-delete">Xóa</span>
        </td>
    </>);
}
exports.default = StudentItem;
