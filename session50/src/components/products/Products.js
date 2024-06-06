"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./products.css");
const react_router_dom_1 = require("react-router-dom");
function Products() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const products = [
        { id: 1, name: "giày nữ", price: 60000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9B0IQv_HVLybSq7dSaAiJF5HN3381V6K-w&s" },
        { id: 2, name: "giày thể thao", price: 50000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJV-bvHTeNUrD9lHSfP9qX6NqG3Z9CmNVtw&s" },
        { id: 3, name: "giày", price: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9B0IQv_HVLybSq7dSaAiJF5HN3381V6K-w&" }
    ];
    const handleClickDetail = (id) => {
        navigate(`/productdetail/${id}`);
    };
    return (<div className='container'>Products
        {products.map((item) => {
            return (<div>
                    <p>Tên {item.name}</p>
                    <p>
                        <img src={item.img} alt=""/>
                    </p>
                    <p>Giá {item.price}</p>
                    <button>Mua</button>
                    <button onClick={() => handleClickDetail(item.id)}>Xem chi tiết</button>
                </div>);
        })}
    </div>);
}
exports.default = Products;
