import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([
    { product: "ip5", price: 6000, quantity: 6 },
    {
      product: "ip6",
      price: 8000,
      quantity: 3,
    },
    {
      product: "ip15",
      price: 9000,
      quantity: 3,
    },
    {
      product: "ip14",
      price: 7000,
      quantity: 8,
    },
  ]);
  // let cart = [
  //     {
  //         product: "ip5",
  //         price: 6000,
  //         quantity: 6,
  //     },
  //     {
  //         product: "ip6",
  //         price: 8000,
  //         quantity: 3,
  //     },
  //     {
  //         product: "ip15",
  //         price: 9000,
  //         quantity: 3,
  //     },
  //     {
  //         product: "ip14",
  //         price: 7000,
  //         quantity: 8,
  //     }
  // ]
  let memo = useMemo(() => {
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return payment;
  }, []);

  return (
    <div>
      UseMemo
      {/* 
            đây là 1 hook giúp ghi việc những tính toán
         */}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button>Add</button>
    </div>
  );
}
