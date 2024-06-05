import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
        <h1>Contact</h1>
        {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-grow text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav
    className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <Link to="index.html" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="mb-0 text-primary text-uppercase">
        <i className="fa fa-cut me-3" />
        HairCut
      </h1>
    </Link>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="index.html" className="nav-item nav-link">
          Home
        </Link>
        <Link to="about.html" className="nav-item nav-link">
          About
        </Link>
        <Link to="service.html" className="nav-item nav-link">
          Service
        </Link>
        <div className="nav-item dropdown">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </Link>
          <div className="dropdown-menu m-0">
            <Link to="price.html" className="dropdown-item">
              Pricing Plan
            </Link>
            <Link to="team.html" className="dropdown-item">
              Our Barber
            </Link>
            <Link to="open.html" className="dropdown-item">
              Working Hours
            </Link>
            <Link to="testimonial.html" className="dropdown-item">
              Testimonial
            </Link>
            <Link to="404.html" className="dropdown-item">
              404 Page
            </Link>
          </div>
        </div>
        <Link to="Contact.tsx" className="nav-item nav-link active">
          Contact
        </Link>
      </div>
      <Link
        to=""
        className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
      >
        Appointment
        <i className="fa fa-arrow-right ms-3" />
      </Link>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
        Contact
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
          <li className="breadcrumb-item">
            <Link className="text-white" to="#">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-white" to="#">
              Pages
            </Link>
          </li>
          <li
            className="breadcrumb-item text-primary active"
            aria-current="page"
          >
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-secondary p-5">
            <p className="d-inline-block bg-dark text-primary py-1 px-4">
              Contact Us
            </p>
            <h1 className="text-uppercase mb-4">
              Have Any Query? Please Contact Us!
            </h1>
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just
              copy and paste the files, add a little code and you're done.{" "}
              <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-transparent"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100" style={{ minHeight: 400 }}>
            <iframe
              className="google-map w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              aria-hidden="false"
              tabIndex={0}
              style={{
                filter: "grayscale(100%) invert(92%) contrast(83%)",
                border: 0
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Get In Touch</h4>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-map-marker-alt text-primary" />
            </div>
            <span>123 Street, New York, USA</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-phone-alt text-primary" />
            </div>
            <span>+012 345 67890</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-envelope-open text-primary" />
            </div>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Quick Links</h4>
          <Link className="btn btn-link" to="">
            About Us
          </Link>
          <Link className="btn btn-link" to="">
            Contact Us
          </Link>
          <Link className="btn btn-link" to="">
            Our Services
          </Link>
          <Link className="btn btn-link" to="">
            Terms &amp; Condition
          </Link>
          <Link className="btn btn-link" to="">
            Support
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Newsletter</h4>
          <div className="position-relative mb-4">
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
          <div className="d-flex pt-1 m-n1">
            <Link className="btn btn-lg-square btn-dark text-primary m-1" to="">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="btn btn-lg-square btn-dark text-primary m-1" to="">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="btn btn-lg-square btn-dark text-primary m-1" to="">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="btn btn-lg-square btn-dark text-primary m-1" to="">
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <Link className="border-bottom" to="#">
              Your Site Name
            </Link>
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
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
    </>
  )
}
