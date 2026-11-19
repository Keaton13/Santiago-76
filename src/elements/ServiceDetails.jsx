import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const CheckCashingHours = [
  { day: "Monday – Friday", hours: "10am – 7pm" },
  { day: "Saturday", hours: "10am – 5pm" },
  { day: "Sunday", hours: "Closed" },
];

const StorePhotos = [
  { src: "/assets/images/web/bg-image-23-700.webp", alt: "Wide aisles stocked with snacks and drinks" },
  { src: "/assets/images/web/bg-image-25-700.webp", alt: "Coffee station and chips at the front of the store" },
  { src: "/assets/images/web/bg-image-26-700.webp", alt: "Hot food counter with Boyd's coffee" },
  { src: "/assets/images/web/corporate-01-700.webp", alt: "Coolers with cold drinks, water, juice and ice" },
];

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet
          pageTitle="Food Mart | Santiago 76"
          description="Santiago Food Mart in Santa Ana is open 24 hours a day, 7 days a week: gasoline, diesel, drinks, snacks, Boyd's coffee, lottery and more."
        />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--27"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Food Mart</h2>
                  <p>Open 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* What we do */}
        <div className="ptb--120 bg_color--1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="w-100 site-rounded"
                  src="/assets/images/web/about-4-1200.webp"
                  alt="Inside the remodeled Santiago Food Mart"
                />
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="section-title">
                  <h2 className="title">What We Do</h2>
                  <p>
                    At Santiago Food Mart, we are open 24 hours a day 7 days a
                    week. We pride ourselves on being your “One Stop Pit Stop”
                    for convenience items and fuel. We provide the products and
                    services that you’d expect to find … we provide quality
                    gasoline products, diesel and a wide selection of drinks,
                    snacks, Boyd’s coffee, lottery and so much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store photos */}
        <div className="pb--120 bg_color--1">
          <div className="container">
            <div className="row row--10 site-swipe-row">
              {StorePhotos.map((photo) => (
                <div className="col-lg-3 col-6 mb--20" key={photo.src}>
                  <img
                    className="site-tile site-rounded"
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Check cashing inside the store */}
        <div className="ptb--120 bg_color--5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                <div className="section-title">
                  <h2 className="title">Check Cashing & Auto Registration</h2>
                  <p>
                    Located within the Food Mart is our Check Cashing & Auto
                    Registration Service Center which offers payroll & tax
                    refund check cashing along with auto registration and
                    renewals. Now you can register your vehicle, grab a money
                    order and send/receive Moneygrams all from one convenient
                    location while you shop!
                  </p>
                </div>
                <ul className="cw-hours mt--30">
                  {CheckCashingHours.map((h) => (
                    <li key={h.day}>
                      <span>{h.day}</span>
                      <strong>{h.hours}</strong>
                    </li>
                  ))}
                </ul>
                <a className="rn-button-style--2 btn-solid" href="/service-details3">
                  <span>Check Cashing & Registration</span>
                </a>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  className="w-100 site-rounded"
                  src="/assets/images/web/corporate-02-1200.webp"
                  alt="Check cashing counter inside Santiago Food Mart"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

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
export default ServiceDetails;
