import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import Slider from "react-slick";
import { slideSlick2 } from "../page-demo/script";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SlideList2 = [
  {
    bgImage: "bg_image--22",
  },
  {
    bgImage: "bg_image--21",
  },
  {
    bgImage: "bg_image--20",
  },
  {
    bgImage: "bg_image--19",
  },
  {
    bgImage: "bg_image--18",
  },
  {
    bgImage: "bg_image--17",
  },
  // {
  //   bgImage: "bg_image--16",
  // },
];

class About extends Component {
  render() {
    let title = "About",
      description =
        "Santiago Food Mart and Auto Wash first opened for business on May 24th 1996 originally branded as a Shell Station along with a full service car wash.  The property & business is family owned and operated with most of the property acquired in 1899.  Where the Convenience Store and fuel islands now reside was a large Victorian home on the corner of Santiago and 17th St.  One of the current owners was raised in this house and played as a young girl on the property watching the 5 freeway being built and modernized in the early 50’s.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Santiago History"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-3.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                      <p className="description">
                        The mid 1950’s brought the end of the residential
                        property and a new Unocal station was built on the
                        family homestead. The early 1970’s brought more change
                        and Santiago Liquor was established and flourished for
                        many years until it was time to replace. As the early
                        1990’s began older service stations were being razed and
                        newer stations were being built with new modern
                        underground gas tanks and updated convenience stores.
                        This lead the family to re-develop the corner to modern
                        standards. Construction took place as the 5 freeway was
                        being modernized at the 17th St Exit.
                      </p>
                      <p className="description">
                        The location of the Auto Wash many years ago had a few
                        different businesses located on it and the last one to
                        reside was a car rental location. The entrance into the
                        Auto Wash in 1992 once was a house accessed via
                        Poinsettia St. that was purchased to create more space
                        and access for the new development and entrance
                        requirements for the Auto Wash. In the mid-2000s a
                        Wireless store was started to replace the car wash
                        boutique area.
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start New Store Image Slider */}
        <div className="slider-wrapper">
          <div className="slider-activation w-75 m-auto">
            <Slider className="rn-slick-dot dot-light" {...slideSlick2}>
              {SlideList2.map((value, index) => (
                <div
                  className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title">{value.title}</h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-solid"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End New Store Image Slider */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1 mt--50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1 ">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">A Message To Customers</h4>
                <p>
                  We are always trying to stay relevant and progressive with the
                  times and look forward to what the future brings on.
                </p>
                <a className="rn-btn btn-white" href="/contact">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="thumbnail contain-Content">
              <div className="image">
                <img
                  src="/assets/images/featured/corporate-6.jpg"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}

        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

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
export default About;
