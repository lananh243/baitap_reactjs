"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import Home from './components/home/Home'
const react_router_dom_1 = require("react-router-dom");
// import Header from './components/header/Header'
// import Register from './components/register/Register'
// import Login from './components/login/Login'
// import Products from './components/products/Products'
// import ProductDetail from './components/product-detail/ProductDetail'
const Bai1_1 = __importDefault(require("./components/b1/Bai1"));
const Bai2_1 = __importDefault(require("./components/b2/Bai2"));
const Bai3_1 = __importDefault(require("./components/b3_b4/Bai3"));
const Login_1 = __importDefault(require("./components/b5_b6/Login"));
const Account_1 = __importDefault(require("./components/b5_b6/Account"));
const PrivateRouter_1 = __importDefault(require("./components/b5_b6/PrivateRouter"));
const Teams_1 = __importDefault(require("./components/b7/Teams"));
const TeamsIndex_1 = __importDefault(require("./components/b7/TeamsIndex"));
const AdminIndex_1 = __importDefault(require("./components/b8/AdminIndex"));
const Order_1 = __importDefault(require("./components/b8/Order"));
function App() {
    return (<div>
      <react_router_dom_1.Routes>
        {/* <Route path='/home' element={<Home></Home>}>
          <Route path='/home/header' element={<Header/>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/productdetail/:productId' element={<ProductDetail/>}></Route> */}
        <react_router_dom_1.Route path='product'>
          <react_router_dom_1.Route path=':productId' element={<Bai1_1.default />}></react_router_dom_1.Route>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='student'>
          <react_router_dom_1.Route path=':name' element={<Bai2_1.default />}></react_router_dom_1.Route>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/students' element={<Bai3_1.default />}></react_router_dom_1.Route>

        <react_router_dom_1.Route path='/login' element={<Login_1.default />}>
            <react_router_dom_1.Route index element={<Account_1.default />}/>
            <react_router_dom_1.Route path='/admin' element={<PrivateRouter_1.default />}/>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/teams' element={<TeamsIndex_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/teams/:teamId' element={<Teams_1.default />}></react_router_dom_1.Route>

        <react_router_dom_1.Route path='/admin' element={<PrivateRouter_1.default />}>
          <react_router_dom_1.Route index element={<AdminIndex_1.default />}/>
          <react_router_dom_1.Route path='/account' element={<Account_1.default />}/>
          <react_router_dom_1.Route path='/order' element={<Order_1.default />}/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
