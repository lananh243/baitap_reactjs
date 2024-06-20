import React from 'react'
import { useSelector } from 'react-redux'

export default function Product() {
  const stateProduct = useSelector((state:any) => {
    return state
  })
  return (
    <div>
      <h1>Bài 3</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateProduct.productReducer.map((product:any, index:number) => {
            return (
              <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
