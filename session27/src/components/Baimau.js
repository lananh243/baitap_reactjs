"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Baimau() {
    // render dữ liệu đối với function component
    let fullName = "minh";
    let age = 25;
    let student = {
        name: "hoa",
        age: 20,
        address: "hà nội",
    };
    let numbers = [1, 2, 3, 4, 5];
    let students = ["ngọc", "lan", "thu", "phương"];
    let products = [
        {
            name: "iphone",
            price: 5000,
            id: 1,
        },
        {
            name: "iphone6",
            price: 6000,
            id: 1,
        },
        {
            name: "iphone7",
            price: 7000,
            id: 1,
        },
    ];
    return (<div>Bai1
        <p>Hiển thị fullName : {fullName}</p>
        <p>{fullName} năm nay {age} tuổi</p>
        <p>{student.name} {student.age} {student.address}</p>
        <p>Chuyển sang dạng JSON</p>
        <p>{JSON.stringify(student)}</p>
        <p>Hiển thị mảng  (array)</p>
        <ul>
            {numbers.map((item, index, arr) => {
            return <li key={index}>{item}</li>;
        })}
        </ul>
        <ul>
            {students.map((item, index) => {
            return <li key={index}>{item}</li>;
        })}
        </ul>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                    {products.map((item, index, arr) => {
            return <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.id}</td>
                                </tr>;
        })}
            </tbody>
        </table>
        
    </div>
    /*
        khi return các element thì phải có thẻ frament bọc bên ngoài
    */
    );
}
exports.default = Baimau;
