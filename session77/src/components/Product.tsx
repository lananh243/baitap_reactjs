import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../config/config";
import axios from "axios";

export default function Product() {
  const [name, setName] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueName = e.target.value;
    setName(valueName);
  };
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueImage = e.target.files?.[0];
    setImage(valueImage);
  };
  const uploadImage = () => {
    const imageRef = ref(storage, `upload-image/${image.name}`);
    uploadBytes(imageRef, image).then((snapShop) => {
      getDownloadURL(snapShop.ref).then((url) => {
        axios.post("http://localhost:3000/products", {
          name,
          image: url,
        });
      });
    });
  };
  return (
    <div>
      Product
      <br />
      <br />
      <input type="text" onChange={changeName} /> Tên sản phẩm
      <br />
      <br />
      <input type="file" onChange={changeImage} />
      <br />
      <br />
      <button onClick={uploadImage}>Thêm sản phẩm</button>
    </div>
  );
}
