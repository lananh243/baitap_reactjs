import React, { useState } from 'react'
interface Product {
    price?: number;
    id?: number;
    productName?: string;
    quantity?: number;
}
export default function Bai5() {
    const [price, setPrice] = useState<number>();
    const [id, setId] = useState<number>();
    const [productName, setProductName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>();
    const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(e.target.value));
    }
    const changeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value);
    }
    const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    }
    const changeQuantity = (e :React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const productCode : Product = {
            price :price,
            id: id,
            productName: productName,
            quantity: quantity
        }
        console.log("Sản phẩm mới :", productCode);
        
    }
  return (
    <div>
        <h1>Bài 5 : </h1>
        <form onSubmit={handleSubmit}>
            <b>Thêm mới sản phẩm</b>
            <p>Mã sản phẩm</p>
            <input type="text" onChange={changeId}/>
            <p>Tên sản phẩm</p>
            <input type="text" onChange={changeName}/>
            <p>Giá</p>
            <input type="text" onChange={changePrice}/>
            <p>Số lượng</p>
            <input type="number" min={1} max={50} step={1} onChange={changeQuantity}/>
            <br /><br />
            <button type='submit' style={{backgroundColor:"darkslateblue", color:"white", width: "170px", border:"none"}}>Đăng ký</button>
        </form>
    </div>
  )
}
