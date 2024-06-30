import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost:any = createAsyncThunk("posts/getAllPost",async () => {
    let response = await axios.get("http://localhost:8080/posts");
    return response.data
}
)
export const addPost:any = createAsyncThunk (
    "posts/addPost",
    async (post:any) => {
        let response:any = await axios.post(
            "http://localhost:8080/posts", post
        );
        return response.data
    }
)
export const sortNamePost:any = createAsyncThunk (
    "posts/sortNamePost",
    async () => {
        let response = await axios.get(`http://localhost:8080/posts?_sort=title&_order=asc`)
        return response.data
    }
)
export const searchNamePost:any = createAsyncThunk (
    "posts/searchNamePost",
    async (searchText) => {
        let response = await axios.get(`http://localhost:8080/posts?title_like=${searchText}`)
        return response.data
    }
)
export const updateStatus:any =createAsyncThunk("posts/updateStatus",
    async(item:any)=>{
    let response = await axios.patch(`http://localhost:8080/posts/${item.id}`,item)
    return response.data
})
export const pagination:any = createAsyncThunk("posts/pagination",
    async(value:number) => {
        let response = await axios.get(`http://localhost:8080/posts?page=${value}&limit=3`)
        return response.data
    }
)
const postReducer = createSlice ({
    name :"post",
    initialState : {
        posts : []
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getAllPost.pending,(state,action) => {

        })
        .addCase(getAllPost.fulfilled,(state,action) => {
            state.posts = action.payload;
        })
        .addCase(getAllPost.rejected,(state,action) => {

        })
        .addCase(addPost.fulfilled,(state:any,action:any) => {
            state.posts.push(action.payload)
        })
        .addCase(updateStatus.fulfilled,(state:any,action) => {
            let index = state.posts.findIndex((post:any) => {
                return post.id === action.payload.id
            })
            if (index !== -1){
                state.posts[index] = action.payload
            }
        })
        .addCase(sortNamePost.fulfilled,(state,action) => {
            state.posts = action.payload;
        })
        .addCase(searchNamePost.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(pagination.fulfilled, (state,action) => {
            state.posts = action.payload
        })
    }
})
export default postReducer.reducer;