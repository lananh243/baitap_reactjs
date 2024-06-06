"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/b1/Home"));
const About_1 = __importDefault(require("./components/b1/About"));
const Contact_1 = __importDefault(require("./components/b1/Contact"));
const Error_1 = __importDefault(require("./components/Error"));
const Index_1 = __importDefault(require("./components/Index"));
const Open_1 = __importDefault(require("./components/Open"));
const Price_1 = __importDefault(require("./components/Price"));
const Service_1 = __importDefault(require("./components/Service"));
const Team_1 = __importDefault(require("./components/Team"));
const Testimonial_1 = __importDefault(require("./components/Testimonial"));
const About1_1 = __importDefault(require("./components/About1"));
const Contact1_1 = __importDefault(require("./components/Contact1"));
const Index1_1 = __importDefault(require("./components/Index1"));
const Pricing_1 = __importDefault(require("./components/Pricing"));
const Service1_1 = __importDefault(require("./components/Service1"));
const Teashop_1 = __importDefault(require("./components/Teashop"));
function App() {
    return (<>
      <nav style={{ display: "flex", gap: "50px", textDecoration: "none" }}>
        <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/contact">Contact</react_router_dom_1.Link>
      </nav>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' element={<Home_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/about' element={<About_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/contact' element={<Contact_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/*' element={<Error_1.default></Error_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/index' element={<Index_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/open' element={<Open_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/price' element={<Price_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/service' element={<Service_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/team' element={<Team_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/testimonial' element={<Testimonial_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/about1' element={<About1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/contact1' element={<Contact1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/index1' element={<Index1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/pricing' element={<Pricing_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/service1' element={<Service1_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path='/teashop' element={<Teashop_1.default />}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
