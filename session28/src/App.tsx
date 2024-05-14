import React from "react";
import Parent from "./components/Parent";
import Products from "./components/Products";

interface Product {
  name: string;
  id: number;
  price: number;
}
export default function App() {
  let fullName: string = "hoa";
  let age: number = 20;

  let products: Product[] = [
    {
      name: "ip5",
      id: 1,
      price: 5000,
    },
    {
      name: "ip14",
      id: 2,
      price: 6000,
    },
    {
      name: "ip15",
      id: 3,
      price: 7000,
    },
  ];
  return (
    <div>
      App
      <p>
        props : properties - dùng để truyền , gửi dữ liệu từ component cha xuống
        component con - thế nào là component cha ? - thế nào là component con ?
        - component cha chứa component con
      </p>
      <p>state</p>
      <Parent a={fullName} b={age}></Parent>
      <Products products={products}></Products>
    </div>
  );
}
