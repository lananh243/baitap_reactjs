import React from 'react'

export default function Contact1() {
  return (
    <>
        {/* header section start */}
  <div className="header_section">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="index.html">
            Home
          </a>
          <a className="nav-item nav-link" href="about.html">
            About
          </a>
          <a className="nav-item nav-link" href="teashop.html">
            Teashop
          </a>
          <a className="nav-item nav-link" href="pricing.html">
            Pricing
          </a>
          <a className="nav-item nav-link" href="contact.html">
            Contact
          </a>
        </div>
      </div>
      <div className="login_menu">
        <a href="#">
          <img src="images/search-icon.png" />
        </a>
      </div>
    </nav>
  </div>
  {/* header section end */}
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="mail_main">
            <h1 className="contact_taital">Contact us</h1>
            <form action="/action_page.php">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Subject"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="text"
                  defaultValue={""}
                />
              </div>
            </form>
            <div className="send_btn">
              <div className="main_bt">
                <a href="#">Send</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact section end */}
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="newsletter_section">
        <div className="newsletter_left">
          <div className="footer_logo">
            <img src="images/footer-logo.png" />
          </div>
        </div>
        <div className="newsletter_right">
          <h5 className="newsletter_taital">Subscribe Newsletter</h5>
          <div className="subscribe_main">
            <input
              type="text"
              className="mail_text"
              placeholder="Enter your email"
              name="text"
            />
            <div className="subscribe_bt">
              <a href="#">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_taital_main">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">About</h2>
            <p className="ipsum_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation u
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Menus</h2>
            <div className="footer_links">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Useful Link</h2>
            <div className="footer_links">
              <ul>
                <li>
                  <a href="#">Adipiscing</a>
                </li>
                <li>
                  <a href="#">Elit, sed do</a>
                </li>
                <li>
                  <a href="#">Eiusmod </a>
                </li>
                <li>
                  <a href="#">Tempor </a>
                </li>
                <li>
                  <a href="#">incididunt</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Contact us</h2>
            <div className="addres_link">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/map-icon.png" />
                    <span className="padding_left_10">
                      No.123 Chalingt Gates
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/call-icon.png" />
                    <span className="padding_left_10">+01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/mail-icon.png" />
                    <span className="padding_left_10">demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="follow_text">Follow Us</h1>
        <div className="social_icon">
          <ul>
            <li>
              <a href="#">
                <img src="images/fb-icon.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/twitter-icon.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/linkedin-icon.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/instagram-icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        Copyright 2019 All Right Reserved By.
        <a href="https://html.design"> Free html Templates</a> Distributed by.{" "}
        <a href="https://themewagon.com">ThemeWagon</a>{" "}
      </p>
      <p />
    </div>
  </div>
  {/* copyright section end */}
  {/* Javascript files*/}
  {/* sidebar */}
  {/* javascript */}
    </>
  )
}
