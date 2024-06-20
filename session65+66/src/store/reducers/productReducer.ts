import { Product } from "../../interface";

const initialProduct:Product[]=[
    {
        id:1,
        name:"Cam sành",
        price:"20.000 đ",
        quantity:10,
    },
    {
        id:2,
        name:"Dưa hấu",
        price:"30.000 đ",
        quantity:15,
    },
    {
        id:3,
        name:"Mít thái",
        price:"40.000 đ",
        quantity:13,
    }

]

const productReducer = (state = initialProduct, action:any) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default productReducer;