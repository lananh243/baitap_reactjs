import React, { useState } from "react";
import { storage } from "../config/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function UploadImage() {
  const [image, setImage] = useState<any>("");
  // Khi người dùng chọn ảnh thì dùng sự kiện onchange
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy giá trị của người dùng đã chọn
    let valueImage: any = e.target.files?.[0];
    console.log("1111111", valueImage);
    // lưu lại giá trị người dùng chọn
    setImage(valueImage);
  };
  // Nơi tiến hành xử lí để upload ảnh
  const uploadImage = () => {
    const imageRef = ref(storage, `upload-image/${image.name}`);
    uploadBytes(imageRef, image).then((snapShop) => {
      getDownloadURL(snapShop.ref).then((url) => {
        console.log("11111111", url);
      });
    });
  };
  return (
    <div>
      UploadImage
      <br />
      <input onChange={changeImage} type="file" />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}
