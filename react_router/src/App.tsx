import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import Home from "./components/b1/Home";
import Contact from "./components/b2/Contact";
import Login from "./components/b3/Login";
import Register from "./components/b4/Register";
import NotFound from "./components/b5/NotFound";
import Home1 from "./components/b6/Home1";
import Product from "./components/b7/Product";
import Detail from "./components/b7/Detail";
import Home2 from "./components/b7/Home2";
import Account from "./components/b8/Account";
import Admin from "./components/b8/Admin";
import Product1 from "./components/b8/Product1";
import HomePage from "./components/b9/HomePage";
import ListUser from "./components/b10/ListUser";
import UserDetail from "./components/b10/UserDetail";

function App() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    // Chuyển hướng về trang home
    navigate("/")
  }
  const isCustomLink = true;
  return (
    <>
      
      {isCustomLink ? (
        <HomePage/>
      ):(
        <Navigate to="/*"/>
      )}
    {/* Khu vực định tuyến các route , ko đc viết html trong này */}
    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button onClick={handleRedirect}>Chuyển hướng về Home</button>
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <button onClick={() => navigate(1)}>Trang trước</button>
    </nav> */}
    <nav>
      <Link to="/">Home1</Link>
      <Link to="/contact">Contact1</Link>
    </nav>
    <nav className="container">
      <NavLink className={"navbar1"} to="/">Home2</NavLink>
      <NavLink className={"navbar1"} to="/product">Product</NavLink>
      <NavLink className={"navbar1"} to="/detail">Detail</NavLink>
    </nav>
    <nav className="contact">
      <NavLink className={"navbar2"} to="/account">Account</NavLink>
      <NavLink className={"navbar2"} to="/admin">Admin</NavLink>
      <NavLink className={"navbar2"} to="/product1">Product</NavLink>
    </nav>
      <Routes>
        {/* Định nghĩa các Router cho component */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Home1/>}></Route>
        <Route path="/" element={<Home2/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/product1" element={<Product1/>}></Route>
        <Route path="home-page" element={<HomePage/>}></Route>
        <Route path="/users" element={<ListUser/>}></Route>
        <Route path="/users/:id" element={<UserDetail/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <ListUser></ListUser>
    </>
  );
}

export default App;
