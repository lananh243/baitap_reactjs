const cart = JSON.parse(localStorage.getItem("cart") || "[]");

// khởi tạo hàm cart reducer
const cartReducer = (state = cart, action:any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("1111111111111111");
            // Các bước làm khi đi mua hàng
            // Kiểm tra xem trong giỏ hàng của mình đã có sản phẩm hay chưa
            // + Nếu có thì tăng số lượng
            // + nếu chưa có thì thêm vào

            let result = state.findIndex((item:any) => {
                return item.id === action.payload.id
            })
            // hàm findIndex dùng để xem phần tử có tồn tại trong mảng hay ko
            // + Nếu có trả về vị trí còn nếu ko có trả về -1

            if(result === -1){
                let product = {...action.payload, quantity:1};
                state.push(product)
                // Tiến hành lưu trên local
                localStorage.setItem("cart",JSON.stringify(state))
            }else {
                state[result].quantity = state[result].quantity + 1;
                // Tiến hành lưu trên local
                localStorage.setItem("cart",JSON.stringify(state))
            }
            return [...state];
        case "INCREASE_QUANTITY":
            let resultIncrease = state.findIndex((item:any) => {
                return item.id === action.payload
            })
            state[resultIncrease].quantity +=1;
            localStorage.setItem("cart",JSON.stringify(state))
            return [...state]
        case "DECREASE_QUANTITY":
            let resultDecrease = state.findIndex((item: any) => item.id === action.payload);
            if (state[resultDecrease].quantity > 0) {
                state[resultDecrease].quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state));
            }
            return [...state];
        case "DELETE_CART":
            if (window.confirm("Bạn có muốn xóa sản phẩm khỏi giỏ hàng không?")) {
                let resultDelete = state.filter((item: any) => item.id !== action.payload);
                localStorage.setItem("cart", JSON.stringify(resultDelete));
                return [...resultDelete];
            } 
            return state;
        default:
            return state;
    }
}
export default cartReducer