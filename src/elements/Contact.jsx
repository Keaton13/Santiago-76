import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMapPin } from "react-icons/fi";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ADDRESS = "617 E 17th St, Santa Ana, CA 92701";
const MAP_QUERY = encodeURIComponent(ADDRESS);

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet
          pageTitle="Contact | Santiago 76"
          description="Call Santiago 76 at (714) 541-3883 or visit us at 617 E 17th St, Santa Ana, CA 92701."
        />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--29"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Contact Information</h2>
                  <p>Give us a call or stop by!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area pt--120 pb--60 bg_color--5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12 mb--30">
                <div className="rn-address site-address-card">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Info</h4>
                    <p>
                      Phone: <a href="tel:+17145413883">(714) 541-3883</a>
                    </p>
                    <p>Fax: (714) 541-3781</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb--30">
                <div className="rn-address site-address-card">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        617 E 17th St <br /> Santa Ana, CA 92701
                      </a>
                    </p>
                    <p>Next to Guaranty Chevrolet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Hours Area  */}
        <div className="pb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2 className="title">Hours</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mb--30">
                <div className="site-hours-card">
                  <h4>Food Mart</h4>
                  <ul className="cw-hours">
                    <li>
                      <span>Monday – Friday</span>
                      <strong>Open 24 hours</strong>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <strong>Open 24 hours</strong>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <strong>Open 24 hours</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb--30">
                <div className="site-hours-card">
                  <h4>Check Cashing & Registration</h4>
                  <ul className="cw-hours">
                    <li>
                      <span>Monday – Friday</span>
                      <strong>10am – 7pm</strong>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <strong>10am – 5pm</strong>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <strong>Closed</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb--30">
                <div className="site-hours-card">
                  <h4>
                    Hand Wash{" "}
                    <span className="site-hours-qualifier">(Weather permitting)</span>
                  </h4>
                  <ul className="cw-hours">
                    <li>
                      <span>Winter</span>
                      <strong>8am – 5pm</strong>
                      <small>Last car at 4:30pm</small>
                    </li>
                    <li>
                      <span>Summer</span>
                      <strong>8am – 6pm</strong>
                      <small>Last car at 5:30pm</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hours Area  */}

        {/* Start Contact Map  */}
        <div className="rn-contact-map-area site-map">
          <iframe
            title="Map to Santiago 76"
            src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
            loading="lazy"
            allowFullScreen
          />
        </div>
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Contact;
