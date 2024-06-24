import { BookTodo } from "../../interface/interface";

// const initialBook:BookTodo[]=[];
// tạo hàm bookReducer
// Chức năng của hàm reducer là tính toán trả về state mới dựa vào action
// action (những công việc mà mk muốn thêm sửa xóa)
// hàm reducer tính toán trả về STATE mới
// tại sao phải tạo state mới vì cái thằng useSelector giúp component 
// re-render khi có state Mới
// const ADD_BOOK = "ADD_BOOK"
let initialBook:BookTodo[] = JSON.parse(localStorage.getItem("books") || "[]");
export const bookReducer = (state = initialBook,action:any) => {
    switch (action.type) {
        case "ADD_TODO":
            localStorage.setItem("books", JSON.stringify([...state,action.payload]))
            return [...state,action.payload];
        case "UPDATE_TODO":
            // Tìm cuốn sách có id trùng với action.payload.id
            const updatedBook = state.map(book => {
                if (book.id === action.payload.id) {
                // Cập nhật thông tin cuốn sách với dữ liệu từ action.payload
                return { ...book, ...action.payload };
                } else {
                // Trả về cuốn sách không bị thay đổi
                return book;
                }
            });
            
            // Lưu danh sách cuốn sách đã cập nhật vào localStorage
            localStorage.setItem("books", JSON.stringify(updatedBook));
            
            // Trả về danh sách cuốn sách đã cập nhật
            return updatedBook;
        case "DELETE_TODO":
            const deleteState = state.filter(book => book.id !== action.payload);
            localStorage.setItem("books", JSON.stringify(deleteState));
            return deleteState; 
        case "UPDATE_STATUS":
            // Lấy ra id
            // console.log(action);
            // Tìm vị trí theo id
            // đi update lại status
            let index = state.findIndex(item=>item.id==action.payload);
            let confirm = window.confirm("bạn có muốn cập nhật hay ko ??");
            if(!confirm){
                return;
            }
            //   console.log(11111,index);
            state[index].status=!state[index].status;
            localStorage.setItem("books", JSON.stringify(state))
            return [...state]
        default:
            return state
    }
    
    
}