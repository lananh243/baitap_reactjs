"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai3() {
    let users = [
        {
            id: 1,
            name: "Nam",
            address: "Hà nội",
        },
        {
            id: 2,
            name: "Minh",
            address: "Hồ Chí Minh",
        },
        {
            id: 3,
            name: "Mai",
            address: "Hà nội",
        },
    ];
    return (<div>
      Bài 3
        {users.map((users) => {
            return (<>
              <div key={users.id}>
                <p>Họ và tên : {users.name}</p>
                <p>Id : {users.id}</p>
                <p>Địa chỉ : {users.address}</p>
                <p>****************************</p>
              </div>
            </>);
        })}
    </div>);
}
exports.default = Bai3;
