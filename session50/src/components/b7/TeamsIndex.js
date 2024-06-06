"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function TeamsIndex() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const teams = [
        { id: 1, name: "CK20", member: 4 },
        { id: 2, name: "B23VN", member: 3 },
        { id: 3, name: "F4KC", member: 6 }
    ];
    const handleDetail = (id) => {
        navigate(`/teams/${id}`);
    };
    return (<div>
        <h1>Đây là trang TeamsIndex</h1>
        {teams.map((item) => {
            return (<div>
                    <p>Tên đội {item.name}</p>
                    <p>Thành viên {item.member}</p>
                    <button onClick={() => handleDetail(item.id)}>Xem chi tiết đội</button>
                </div>);
        })}
    </div>);
}
exports.default = TeamsIndex;
