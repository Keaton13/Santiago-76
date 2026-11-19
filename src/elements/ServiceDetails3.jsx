import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class ServiceDetails3 extends Component {
  render() {
    const CheckCashingHours = [
      { day: "Monday – Friday", hours: "10am – 7pm" },
      { day: "Saturday", hours: "10am – 5pm" },
      { day: "Sunday", hours: "Closed" },
    ];
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet
          pageTitle="Check Cashing & Auto Registration | Santiago 76"
          description="Payroll and tax refund check cashing, MoneyGram, money orders, and auto registration renewals, transfers, duplicates and custom plates inside Santiago Food Mart in Santa Ana."
        />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--32"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Check Cashing & Registration Services
                  </h2>
                  <p>Inside the Food Mart</p>
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
                            className="w-100 site-rounded"
                            src="/assets/images/web/corporate-02-1200.webp"
                            alt="Check cashing counter inside Santiago Food Mart"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Located within the Food Mart is our Check Cashing &
                            Auto Registration Service Center which offers
                            payroll & tax refund check cashing along with auto
                            registration and renewals. Now you can register your
                            vehicle, grab a money order and send/receive
                            Moneygrams all from one convenient location while
                            you shop!
                          </p>
                          <br/>
                    <h3>Check Cashing / Auto Registration Hours</h3>
                          <ul className="cw-hours mt--20">
                            {CheckCashingHours.map((h) => (
                              <li key={h.day}>
                                <span>{h.day}</span>
                                <strong>{h.hours}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h2 className="title">Registration Services</h2>
                          <p>
                            Skip the long lines and let us handle it for you. We
                            offer registration renewals, title transfers,
                            duplicate registrations and titles, and custom
                            license plates all done quickly and hassle free.
                            Whether you're renewing your tags or personalizing
                            your ride with a custom plate, our team makes it
                            easy to get in, get done, and get back on the road.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb">
                          <img
                            className="w-100 site-rounded"
                            src="/assets/images/web/service-4-1200.webp"
                            alt="Auto registration price sign: renewal $45, transfers $55, duplicates $55, custom plates $50"
                          />
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
