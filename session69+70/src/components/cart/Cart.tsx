import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCart } from '../../interface';
import "./cart.css"
export default function Cart() {
  const cart: ProductCart[] = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();

  const increase = (id: number) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  }

  const decrease = (id: number) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  }

  const deleteCart = (id: number) => {
    dispatch({
      type: "DELETE_CART",
      payload: id,
    });
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  return (
    <div>
      <h2>Cart</h2>
      <br />
      <div className='cartMain'>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Mô tả</th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: ProductCart, index: number) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{item.price}</td>
                <td>
                  <button style={{border:"none", width:"10px", color:"red"}} onClick={() => decrease(item.id)}>-</button>
                  {item.quantity}
                  <button style={{border:"none", width:"10px", color:"orange"}} onClick={() => increase(item.id)}>+</button>
                </td>
                <td>
                  <button style={{border:"none", color:"red"}} onClick={() => deleteCart(item.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "30px" }}>
        <strong>Tổng tiền: </strong> {formattedTotalPrice}
        </div>
      </div>
      
    </div>
  );
}
