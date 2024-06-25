import { Product } from "../../interface";

// const products:Product[] = [
//     {
//         id:1,
//         image:"https://pos.nvncdn.com/6e07fd-26899/ps/20230321_kbXiSkWAZk.jpeg",
//         name:"Quần",
//         price:30000,
//         stock:5,
//         description:"Quần",
//     },
//     {
//         id:2,
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2_DHoWCIw3wsUqG1NASAPLzJUoQTxck6uw&s",
//         name:"Áo",
//         price:40000,
//         stock:5,
//         description:"Áo",
//     },
//     {
//         id:3,
//         image:"https://megafashion.vn/data/product/fmq1695868840.jpg",
//         name:"Giày",
//         price:60000,
//         stock:5,
//         description:"Giày",
//     },
//     {
//         id:4,
//         image:"https://product.hstatic.net/200000427375/product/2_79dbafd6dd8b46de864c48135e21a61c.png",
//         name:"Dép",
//         price:50000,
//         stock:5,
//         description:"Dép",
//     }
// ]

// khởi tạo hàm product
let initialProduct:Product[] = JSON.parse(localStorage.getItem("products") || "[]")
const productReducer = (state = initialProduct, action:any) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            localStorage.setItem("products", JSON.stringify([...state,action.payload]))
            return [...state,action.payload]
        case "UPDATE_PRODUCT":
            const updateProduct = state.map(product => {
                if (product.id === action.payload.id){
                    return { ...product, ...action.payload};
                }else {
                    return product;
                }
                localStorage.setItem("products",JSON.stringify(updateProduct));
            })
            return updateProduct;
        case "DELETE_PRODUCT":
            return [...state]
        default:
            return state;
    }

}
export default productReducer