// nơi lấy dữ liệu

import axios from "axios";

// hàm lấy tất cả thông tin product
export const getProduct = async () => {
    const response:any = await axios.get("http://localhost:8080/products")
        console.log(222222222222,response);
        
        return response.data
}