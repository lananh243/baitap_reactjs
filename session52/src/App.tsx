import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/b1/Home'
import About from './components/b1/About'
import Contact from './components/b1/Contact'
import Error from './components/Error'
import Index from './components/Index'
import Open from './components/Open'
import Price from './components/Price'
import Service from './components/Service'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import About1 from './components/About1'
import Contact1 from './components/Contact1'
import Index1 from './components/Index1'
import Pricing from './components/Pricing'
import Service1 from './components/Service1'
import Teashop from './components/Teashop'

export default function App() {
  return (
    <>
      <nav style={{display:"flex", gap:"50px",textDecoration:"none"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/*'element={<Error></Error>}></Route>
        <Route path='/index' element={<Index/>}></Route>
        <Route path='/open' element={<Open/>}></Route>
        <Route path='/price' element={<Price/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/testimonial' element={<Testimonial/>}></Route>
        <Route path='/about1' element={<About1/>}></Route>
        <Route path='/contact1' element={<Contact1/>}></Route>
        <Route path='/index1' element={<Index1/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/service1' element={<Service1/>}></Route>
        <Route path='/teashop' element={<Teashop/>}></Route>
      </Routes>
    </>
  )
}
