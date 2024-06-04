import React from 'react'
// import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
// import Header from './components/header/Header'
// import Register from './components/register/Register'
// import Login from './components/login/Login'
// import Products from './components/products/Products'
// import ProductDetail from './components/product-detail/ProductDetail'
import Bai1 from './components/b1/Bai1'
import Bai2 from './components/b2/Bai2'
import Bai3 from './components/b3_b4/Bai3'
import Login from './components/b5_b6/Login'
import Account from './components/b5_b6/Account'
import PrivateRouter from './components/b5_b6/PrivateRouter'
import Teams from './components/b7/Teams'
import TeamsIndex from './components/b7/TeamsIndex'
import AdminIndex from './components/b8/AdminIndex'
import Order from './components/b8/Order'


export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/home' element={<Home></Home>}>
          <Route path='/home/header' element={<Header/>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/productdetail/:productId' element={<ProductDetail/>}></Route> */}
        <Route path='product'>
          <Route path=':productId' element={<Bai1/>}></Route>
        </Route>
        <Route path='student'>
          <Route path=':name'element={<Bai2/>}></Route>
        </Route>
        <Route path='/students'element={<Bai3/>}></Route>

        <Route path='/login' element={<Login />}>
            <Route index element={<Account/>} />
            <Route path='/admin' element={<PrivateRouter />} />
        </Route>
        <Route path='/teams'element={<TeamsIndex/>}></Route>
        <Route path='/teams/:teamId' element={<Teams/>}></Route>

        <Route path='/admin' element={<PrivateRouter />}>
          <Route index element={<AdminIndex />} />
          <Route path='/account' element={<Account />} />
          <Route path='/order' element={<Order />} />
        </Route>
      </Routes>
    </div>
  )
}
