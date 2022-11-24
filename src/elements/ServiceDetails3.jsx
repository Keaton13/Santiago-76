import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class ServiceDetails3 extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Service Details" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Santiago Go Wireless</h2>
                  <p>One Stop Convienece Wireless</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/service-01.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Santiago Wireless is your one-stop convenience
                            wireless location allowing you to find your next
                            cellular phone easier. We are a Premium Boost Mobile
                            Dealer and our wireless team, who is led by Luis
                            Aguilar can help you choose the perfect rate plan
                            and phone for your family, and or your employees.
                          </p>
                          <p>
                            We have an unmatched variety of accessories all in
                            one friendly location from Bluetooth® devices,
                            chargers, cords and affordable rate plans including
                            international re-charge. We are located inside the
                            Santiago Hand Wash building in an easy-to-find
                            destination for all of your wireless needs 7 days a
                            week. Santiago Wireless is committed to providing a
                            shopping experience that exceeds our customer’s
                            expectations.
                          </p>
                          <h4 className="title">Hours of Operation</h4>
                          <ul className="liststyle">
                            <li>
                              <strong>Monday:</strong> 10am - 6pm
                            </li>
                            <li>
                              <strong>Tuesday:</strong> 10am - 6pm
                            </li>
                            <li>
                              <strong>Wednesday:</strong> 10am - 6pm
                            </li>
                            <li>
                              <strong>Thursday:</strong> 10am - 6pm
                            </li>
                            <li>
                              <strong>Friday:</strong> 10am - 6pm
                            </li>
                            <li>
                              <strong>Saturday:</strong> 10am - 5pm
                            </li>
                            <li>
                              <strong>Sunday:</strong> 10am - 5pm
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                        <h4 className="title">Boost Mobile iphones available.</h4>
                          <p>
                            but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which
                            don't look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum. You need to
                            be sure there isn't anything embarrassing
                          </p>
                          <p>
                            hidden in the middle of text. All the Lorem Ipsum
                            generators tend toitrrepeat predefined chunks.
                            Necessary, making this the first true generator on
                            the Internet.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/service-02.png"
                            alt="Service Images"
                          />
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
                            onClose={() => this.setState({ isOpen: false })}
                          />
                          <button
                            className="video-popup"
                            onClick={this.openModal}
                          >
                            <span className="play-icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default ServiceDetails3;
