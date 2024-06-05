export default function Blog() {
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="logo" href="index.html">
              <img src="images/logo.png" />
            </a>
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
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="repair.html">
                    Repair
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="search_icon">
                  <a href="#">
                    <img src="images/search-icon.png" />
                  </a>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
      {/* header section end */}
      {/*  blog section start */}
      <div className="blog_section layout_padding">
        <div className="container-fluid">
          <h1 className="blog_taital">What We Do</h1>
          <p className="blog_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some{" "}
          </p>
          <div className="blog_section_2">
            <div className="row">
              <div className="col-md-6 padding_left_0">
                <div className="image_4">
                  <img src="images/img-4.png" />
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="laptop_text">Mobiles Repair </h4>
                <p className="ipsum_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure{" "}
                </p>
                <div className="read_bt_2">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="blog_section_3">
              <div className="row">
                <div className="col-md-6">
                  <div className="blog_taital_main">
                    <h4 className="laptop_text">Tablate Rapair</h4>
                    <p className="ipsum_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure{" "}
                    </p>
                    <div className="read_bt_2">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 padding_right_0">
                  <div className="image_5">
                    <img src="images/img-5.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog_section_2">
              <div className="row">
                <div className="col-md-6 padding_left_0">
                  <div className="image_4">
                    <img src="images/img-6.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="laptop_text">Laptop And pc Repair</h4>
                  <p className="ipsum_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure{" "}
                  </p>
                  <div className="read_bt_2">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  blog section end */}
      {/* footer section start */}
      <div className="footer_section">
        <div className="container">
          <div className="footer_location_text">
            <ul>
              <li>
                <img src="images/map-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Loram Ipusm hosting web</a>
                </span>
              </li>
              <li>
                <img src="images/call-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Call : +7586656566</a>
                </span>
              </li>
              <li>
                <img src="images/mail-icon.png" />
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
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="repair.html">Service</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
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
                      <img src="images/youtub-icon.png" />
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
