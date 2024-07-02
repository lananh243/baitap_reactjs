import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../../service/product.server";
// Ham di lay tat ca san pham
export const getAllProduct:any = createAsyncThunk(
    "product/getAllProduct",getProduct
)
// export const addCart:any = createAsyncThunk ("product/addCart",
//     async (product) => {
//         const response = await axios.post("http://localhost:8080/cart",product)
//         return response.data
//     }
// )
export const getAllCart:any = createAsyncThunk ("cart/getAllCart",
    async () => {
        const response = await axios.post("http://localhost:8080/cart")
        return response.data
    }
)
const productReducer:any = createSlice ({
    name:"product",
    initialState:{
        product:[],
        cart:[]
    },
    reducers:{
        // Chứa những hành động
        addToCart: (state:any, action) => {
            // console.log(466664,state.cart);
            
            let result = state.cart.findIndex((item:any) => {
                return item.id = action.payload.id
            })
            console.log(222,result);
            
            if(result === -1){
                let newProduct = {...action.payload, quantity : 1};
                state.cart.push(newProduct)
            }else{
                state.cart[result].quantity = state.cart[result].quantity + 1;
            }
          }
    },
    extraReducers:(buider) => {
        buider
        .addCase(getAllProduct.pending,(state,action) => {

        })
        .addCase(getAllProduct.fulfilled,(state,action) => {
            console.log("Trang thai cho xu li11111",action);
            
            state.product = action.payload
        })
        .addCase(getAllProduct.rejected,(state,action) => {

        })
        .addCase(getAllCart.pending,(state,action) =>{

        })
        .addCase(getAllCart.fulfilled,(state,action) => {
            state.cart = action.payload
        })
        .addCase(getAllCart.rejected,(state,action) => {

        })
        // .addCase(addCart.fulfilled,(state,action) => {
        //     // Logic xử lí khi thêm vào giỏ hàng 
        //     console.log("Đi mua hàng thành công");
            

        // })
        // .addCase(addCart.rejected,(state,action) => {
        //     // có lỗi khi mua hàng

        // })
    }
})
export const {addToCart} = productReducer.actions;
export default productReducer.reducer;