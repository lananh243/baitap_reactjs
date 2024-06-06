"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/b1/Home"));
const Contact_1 = __importDefault(require("./components/b2/Contact"));
const Login_1 = __importDefault(require("./components/b3/Login"));
const Register_1 = __importDefault(require("./components/b4/Register"));
const NotFound_1 = __importDefault(require("./components/b5/NotFound"));
const Home1_1 = __importDefault(require("./components/b6/Home1"));
const Product_1 = __importDefault(require("./components/b7/Product"));
const Detail_1 = __importDefault(require("./components/b7/Detail"));
const Home2_1 = __importDefault(require("./components/b7/Home2"));
const Account_1 = __importDefault(require("./components/b8/Account"));
const Admin_1 = __importDefault(require("./components/b8/Admin"));
const Product1_1 = __importDefault(require("./components/b8/Product1"));
const HomePage_1 = __importDefault(require("./components/b9/HomePage"));
const ListUser_1 = __importDefault(require("./components/b10/ListUser"));
const UserDetail_1 = __importDefault(require("./components/b10/UserDetail"));
function App() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleRedirect = () => {
        // Chuyển hướng về trang home
        navigate("/");
    };
    const isCustomLink = true;
    return (<>
      
      {isCustomLink ? (<HomePage_1.default />) : (<react_router_dom_1.Navigate to="/*"/>)}
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
      <react_router_dom_1.Link to="/">Home1</react_router_dom_1.Link>
      <react_router_dom_1.Link to="/contact">Contact1</react_router_dom_1.Link>
    </nav>
    <nav className="container">
      <react_router_dom_1.NavLink className={"navbar1"} to="/">Home2</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink className={"navbar1"} to="/product">Product</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink className={"navbar1"} to="/detail">Detail</react_router_dom_1.NavLink>
    </nav>
    <nav className="contact">
      <react_router_dom_1.NavLink className={"navbar2"} to="/account">Account</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink className={"navbar2"} to="/admin">Admin</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink className={"navbar2"} to="/product1">Product</react_router_dom_1.NavLink>
    </nav>
      <react_router_dom_1.Routes>
        {/* Định nghĩa các Router cho component */}
        <react_router_dom_1.Route path="/" element={<Home_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/" element={<Home1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/" element={<Home2_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/login" element={<Login_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/register" element={<Register_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/product" element={<Product_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/detail" element={<Detail_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/account" element={<Account_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/admin" element={<Admin_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/product1" element={<Product1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="home-page" element={<HomePage_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/users" element={<ListUser_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/users/:id" element={<UserDetail_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/*" element={<NotFound_1.default />}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
      <ListUser_1.default></ListUser_1.default>
    </>);
}
exports.default = App;
