import React from "react";
// import Header from './components/Header'
// import Main from './components/Main'
// import Login from "./components/login/Login";
import "./components/header.scss"
import Heder from "./components/export/Header";
import Menu from "./components/export/Menu";
import Navba from "./components/export/Navba";
import Modal from "./components/export/Modal";
import Form from "./components/export/Form";
export default function App() {
  return (
    <div>
        {/* <Header></Header> */}
        {/* <Main></Main> */}
        {/* <Login></Login> */}
        <Heder></Heder>
        {/* npm i react-icons */}
        <div className="flex">
          <Menu></Menu>
          <br /><br />
          <div className="flex flex-col w-[100%]">
            <Navba></Navba>
            <Modal></Modal>
            <div className="flex py-2 px-6 bg-gray-200 w-full h-[800px]">
              <Form></Form>
            </div>
          </div>
      </div>
    </div>
  );
}
