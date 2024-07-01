import React, { useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../store/reducers/productReducer";
export default function Cart() {
  const { cart } = useSelector((state: any) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCart());
  }, []);
  return (
    <div>
      Shopping Cart
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: any, index: number) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>
                  <button>-</button>
                  {item.quantity}
                  <button>+</button>
                </td>
                <td>{item.price}</td>
                <td
                  style={{
                    width: "150px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button>Update</button>
                    <button>Remove</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
