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
class Post extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPosts: [
                {
                    id: 1,
                    title: "Tại sao nên học ReactJS",
                    content: "Học ReactJS để đi làm",
                    author: "David"
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giúp truyền dữ liệu từ component con xuống component cha",
                    author: "Linda"
                },
                {
                    id: 3,
                    title: "State trong ReactJS là gì ?",
                    content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
                    author: "David"
                }
            ]
        };
    }
    render() {
        const { a } = this.props;
        return (<div>
        {this.state.listPosts.map((a) => (<div key={a.id}>
                <p>Id : {a.id}</p>
                <p>Title : {a.title}</p>
                <p>Content : {a.content}</p>
                <p>Author : {a.author}</p>
                <p>***********************</p>
            </div>))}
      </div>);
    }
}
exports.default = Post;
