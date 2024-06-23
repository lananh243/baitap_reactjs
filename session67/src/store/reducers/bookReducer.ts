import { BookTodo } from "../../interface";

let stateBook:BookTodo[] = JSON.parse(localStorage.getItem("books") || "[]");

const bookReducer = ( state = stateBook, action:any) => {
    switch (action.type) {
        case "ADD_TODO":
            localStorage.setItem("books", JSON.stringify([...state,action.payload]))
            return [...state,action.payload];
        case "UPDATE_TODO":
            const updatedBook = state.map(book =>
                book.id === action.payload.id ? { ...book, ...action.payload } : book
            );
            localStorage.setItem("books", JSON.stringify(updatedBook));
            return updatedBook;
        case "DELETE_TODO":
            const deleteState = state.filter(book => book.id !== action.payload);
            localStorage.setItem("books", JSON.stringify(deleteState));
            return deleteState;
        default:
            return state;
    }
}

export default bookReducer;