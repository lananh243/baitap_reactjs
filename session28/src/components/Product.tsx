import React from "react";
interface Props {
  product: Product;
}
interface Product {
  name: string;
  id: number;
  price: number;
}
export default function Product({ product }: Props) {
  console.log(product);

  return (
    <div>
      Tên sản phẩm : {product.name} - Id sản phẩm : {product.name} - Giá sản
      phẩm : {product.id}
    </div>
  );
}
