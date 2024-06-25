import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interface";
import "./product.css"
import { Button, Form, Modal } from "react-bootstrap";
export default function Products() {
  // Lấy dữ liệu ở trong kho đi render
  const products: any = useSelector((state) => state);
  const disPatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] =  useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const handleClose = () => {
      setName("");
      setDescription("");
      setImage("");
      setPrice("")
      setShow(false)
  };
  const [showEdit, setShowEdit] = useState(false);
  
  const handleCloseEdit = () => {
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
    setEditId(null);
    setShowEdit(false)
  }
  const handShowEdit = (id:number) => {
    setEditId(id);
    const productToEdit = products.productReducer.find((product:Product) => product.id === id);
    if(productToEdit) {
      setName(productToEdit.name);
      setDescription(productToEdit.description);
      setImage(productToEdit.image);
      setPrice(productToEdit.price)
    }
    setShowEdit(true)
  };
  const updateProduct = () => {
    if (editId !== null) {
      const updateProduct = {
        id:editId,
        name:name,
        description:description,
        image:image,
        price:price
      }
      disPatch({
        type: "UPDATE_PRODUCT",
        payload: updateProduct
      })
      handleCloseEdit();
    }
  }
  const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
    let valueName = e.target.value;
    setName(valueName)
  }
  const hadleDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
    let valueDescription = e.target.value;
    setDescription(valueDescription)
  }
  const handleImg = (e:React.ChangeEvent<HTMLInputElement>) => {
    let valueImg = e.target.value;
    setImage(valueImg)
  }
  const handlePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
    let valuePrice = e.target.value;
    setPrice(valuePrice)
  }
  const addProduct = () => {
    let newProduct = {
      id : Math.floor(Math.random()*100000000),
      name : name,
      description : description,
      image : image,
      price : price
    }
    disPatch ({
      type: "ADD_PRODUCT",
      payload : newProduct
    })
    handleClose();
  }
  const addToCart = (product: Product) => {
    disPatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  return (
    <div>
        <h2>Product</h2>
        <div style={{display:"flex", justifyContent:"end", gap:"20px"}}>
          <button style={{color:"yellowgreen", border : "2px solid grey"}} onClick={handleShow}>Thêm</button>
        </div>
      <div className="productsMain">
          <table border={1}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Mô tả</th>
                <th>Ảnh</th>
                <th>Giá</th>
                <th>Hành động</th>
                <td>Chức năng</td>
              </tr>
            </thead>
            <tbody>
              {products.productReducer.map((product: Product, index: number) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>
                      <img src={product.image} alt="" />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <button style={{border:"none", color:"blue"}} onClick={() => addToCart(product)} >
                        Add to cart
                      </button>
                    </td>
                    <td>
                      <button style={{border:"2px solid grey", color:"blueviolet"}} onClick={() => {handShowEdit(product.id)}}>Cập nhật</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mô tả sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={hadleDescription}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ảnh sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handleImg}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handlePrice}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Lưu lại
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handleName}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mô tả sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={hadleDescription}
                value={description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ảnh sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handleImg}
                value={image}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={handlePrice}
                value={price}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Đóng
          </Button>
          <Button variant="primary" onClick={updateProduct}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
