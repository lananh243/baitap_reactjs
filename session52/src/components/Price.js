"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Price() {
    return (<>
        <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="mb-0 text-primary text-uppercase">
        <i className="fa fa-cut me-3"/>
        HairCut
      </h1>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" className="nav-item nav-link">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="price.html" className="dropdown-item active">
              Pricing Plan
            </a>
            <a href="team.html" className="dropdown-item">
              Our Barber
            </a>
            <a href="open.html" className="dropdown-item">
              Working Hours
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <a href="" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">
        Appointment
        <i className="fa fa-arrow-right ms-3"/>
      </a>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
      <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
        Pricing Plan
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-primary active" aria-current="page">
            Pricing Plan
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Price Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
            <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
              Price &amp; Plan
            </p>
            <h1 className="text-uppercase mb-4">
              Check Out Our Barber Services And Prices
            </h1>
            <div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Haircut</h6>
                <span className="text-uppercase text-primary">$29.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Beard Trim</h6>
                <span className="text-uppercase text-primary">$35.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Mans Shave</h6>
                <span className="text-uppercase text-primary">$23.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Hair Dyeing</h6>
                <span className="text-uppercase text-primary">$19.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Mustache</h6>
                <span className="text-uppercase text-primary">$15.00</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h6 className="text-uppercase mb-0">Stacking</h6>
                <span className="text-uppercase text-primary">$39.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100">
            <img className="img-fluid h-100" src="img/price.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Price End */}
  {/* Footer Start */}
  <div className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Get In Touch</h4>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-map-marker-alt text-primary"/>
            </div>
            <span>123 Street, New York, USA</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-phone-alt text-primary"/>
            </div>
            <span>+012 345 67890</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-envelope-open text-primary"/>
            </div>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Quick Links</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Newsletter</h4>
          <div className="position-relative mb-4">
            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
              SignUp
            </button>
          </div>
          <div className="d-flex pt-1 m-n1">
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-twitter"/>
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-facebook-f"/>
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-youtube"/>
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-linkedin-in"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              Your Site Name
            </a>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up"/>
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
    </>);
}
exports.default = Price;
