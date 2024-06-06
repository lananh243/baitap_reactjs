"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function ProductDetail() {
    const products = [
        { id: 1, name: "giày nữ", price: 60000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9B0IQv_HVLybSq7dSaAiJF5HN3381V6K-w&s", description: "Giày sịn" },
        { id: 2, name: "giày thể thao", price: 50000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJV-bvHTeNUrD9lHSfP9qX6NqG3Z9CmNVtw&s", description: "Gày sin sò" },
        { id: 3, name: "giày", price: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9B0IQv_HVLybSq7dSaAiJF5HN3381V6K-w&", description: "Giày" }
    ];
    // Dùng hook useParams
    const params = (0, react_router_dom_1.useParams)();
    // lấy id ra : 
    const id = params.productId;
    // có id sản phẩm rồi , đi lọc xem id đó là sản phẩm trong danh sách sản phẩm : 
    const productDetail = products.find((item) => {
        return item.id === Number(id);
    });
    return (<div>ProductDetail
        <p>Name : {productDetail === null || productDetail === void 0 ? void 0 : productDetail.name}</p>
        <p>
            <img src={productDetail === null || productDetail === void 0 ? void 0 : productDetail.img} alt=""/>
        </p>
        <p>Giá : {productDetail === null || productDetail === void 0 ? void 0 : productDetail.price}</p>
        <p>Mô tả : {productDetail === null || productDetail === void 0 ? void 0 : productDetail.description}</p>
    </div>);
}
exports.default = ProductDetail;
