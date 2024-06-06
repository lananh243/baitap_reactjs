"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
function UserDetail() {
    const { id } = (0, react_router_dom_1.useParams)();
    const users = [
        { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
        { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
        { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
    ];
    const user = users.find(user => user.id === parseInt(id));
    return (<div>
        {user ? (<div>
                <h3 style={{ display: "flex", justifyContent: "center" }}>Thông tin chi tiết</h3>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <react_bootstrap_1.Card style={{ width: "300px", height: "240px" }}>
                        <react_bootstrap_1.Card.Body>
                            <react_bootstrap_1.Card.Text>Id : {user.id}</react_bootstrap_1.Card.Text>
                            <react_bootstrap_1.Card.Text>UserName : {user.name}</react_bootstrap_1.Card.Text>
                            <react_bootstrap_1.Card.Text>Email : {user.email}</react_bootstrap_1.Card.Text>
                            <react_bootstrap_1.Card.Text>Address : {user.address}</react_bootstrap_1.Card.Text>
                            <react_bootstrap_1.Button style={{ width: "100%" }} variant="primary">Xem chi tiết</react_bootstrap_1.Button>
                        </react_bootstrap_1.Card.Body>
                    </react_bootstrap_1.Card>  
                </div>  
            </div>) : (<p>Người dùng không tồn tại</p>)}
   
    </div>);
}
exports.default = UserDetail;
