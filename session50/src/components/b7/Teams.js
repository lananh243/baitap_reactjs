"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Teams() {
    const teams = [
        { id: 1, name: "CK20", member: 4, description: "có 1 ko 2" },
        { id: 2, name: "B23VN", member: 3, description: "Duy nhất" },
        { id: 3, name: "F4KC", member: 6, description: "ai địch lại nổi" }
    ];
    const params = (0, react_router_dom_1.useParams)();
    const id = params.teamId;
    const teamDetail = teams.find((item) => {
        return item.id === Number(id);
    });
    return (<div>
        <div>
            <h3>Chi tiết đội</h3>
            <p>Tên đội :{teamDetail === null || teamDetail === void 0 ? void 0 : teamDetail.name}</p>
            <p>Thành viên :{teamDetail === null || teamDetail === void 0 ? void 0 : teamDetail.member}</p>
            <p>Mô tả :{teamDetail === null || teamDetail === void 0 ? void 0 : teamDetail.description}</p>
        </div>
    </div>);
}
exports.default = Teams;
