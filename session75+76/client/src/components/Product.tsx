import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProduct } from "../store/reducers/productReducer";
import "./product.css";
export default function Product() {
  // Lay data ve
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const addToCartNow = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      Product
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Ảnh</th>
            <th>Số lượng trong kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.productReducer.product.map((product: any, index: number) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => addToCartNow(product)}>Mua</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
