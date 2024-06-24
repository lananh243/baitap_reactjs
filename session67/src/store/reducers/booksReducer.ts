import { BookTodo } from "../../interface";

let stateBook:BookTodo[] = JSON.parse(localStorage.getItem("books") || "[]");

const booksReducer = ( state = stateBook, action:any) => {
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
            let index = state.findIndex(item => item.id === action.payload);
            let confirm = window.confirm ("Bạn có cập nhật lại trạng thái không ??");
            if (!confirm) {
                return;
            }
            state[index].status =! state[index].status;
            localStorage.setItem("books", JSON.stringify(state))
            return [...state]
        default:
            return state;
    }
}

export default booksReducer;