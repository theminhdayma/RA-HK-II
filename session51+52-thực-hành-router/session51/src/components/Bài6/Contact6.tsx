import { Link } from "react-router-dom";

export default function Contact6() {
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/index"} className="logo">
              <img src="public/images/logo.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={"/index"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/repair"} className="nav-link">
                    Repair
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="search_icon">
                  <a href="#">
                    <img src="public/images/search-icon.png" />
                  </a>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
      {/* header section end */}
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container-fluid">
          <h1 className="contact_taital">Contact Us</h1>
          <p className="contact_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="mail_section_1">
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Name"
                    name="text"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Email"
                    name="text"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Phone Number"
                    name="text"
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Massage"
                    rows={5}
                    id="comment"
                    name="Massage"
                    defaultValue={""}
                  />
                  <div className="send_bt">
                    <a href="#">SEND</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
      {/* footer section start */}
      <div className="footer_section">
        <div className="container">
          <div className="footer_location_text">
            <ul>
              <li>
                <img src="public/images/map-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Loram Ipusm hosting web</a>
                </span>
              </li>
              <li>
                <img src="public/images/call-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Call : +7586656566</a>
                </span>
              </li>
              <li>
                <img src="public/images/mail-icon.png" />
                <span className="padding_left_10">
                  <a href="#">demo@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">Useful link </h2>
              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to={"/index"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/repair"}>Service</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">Repair</h2>
              <p className="lorem_text">
                Lorem ipsum dolor sit amet, consectetur adipiscinaliqua
                Loreadipiscing{" "}
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">social media</h2>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="public/images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="public/images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="public/images/linkedin-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="public/images/youtub-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h1 className="useful_text">Our Repair center</h1>
              <p className="footer_text">
                Lorem ipsum dolor sit amet, consectetur
                adipiscinaliquaLoreadipiscing{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end info section */}
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2019 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a> Distributed By{" "}
            <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </>
  );
}
