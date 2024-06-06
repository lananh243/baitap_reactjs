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
function UserList() {
    const users = [
        { id: 1, name: 'Mai', age: 25 },
        { id: 2, name: 'Lan', age: 19 },
        { id: 3, name: 'Hưởng', age: 30 },
        { id: 4, name: 'Đức', age: 16 },
        { id: 5, name: 'Trinh', age: 22 }
    ];
    const usersOver18 = (0, react_1.useMemo)(() => {
        return users.filter(user => user.age > 18);
    }, [users]);
    return (<div>
      <h1>Bài 2</h1>
      <ul>
        {usersOver18.map(user => (<li key={user.id}>
            {user.name} (Age: {user.age})
          </li>))}
      </ul>
    </div>);
}
exports.default = UserList;
