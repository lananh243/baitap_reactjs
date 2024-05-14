import React from "react";
import Product from "./Product";
interface Props {
  products: Product[];
  name?: string;
}
interface Product {
  name: string;
  id: number;
  price: number;
}
// const props = {
//     products : [],
//     a : 6
// }

export default function Products({ products}: Props) {
  console.log(products);

  return (
    <div>
      Products
      <ul>
        {products.map((item, index, arr) => {
          return <Product product={item}></Product>;
        })}
      </ul>
    </div>
  );
}
