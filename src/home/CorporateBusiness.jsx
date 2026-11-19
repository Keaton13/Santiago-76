import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Helmet from "../component/common/Helmet";
import { FiChevronUp, FiCheck } from "react-icons/fi";
import BrandTwo from "../elements/BrandTwo";

const SlideList = [
  {
    textPosition: "text-right",
    bgImage: "bg_image--30",
    title: "Santiago 76",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--31",
    title: "Food Mart",
    buttonText: "Read More",
    buttonLink: "/service-details",
  },
  {
    textPosition: "text-right",
    bgImage: "bg_image--33",
    title: "Car Wash",
    buttonText: "Read More",
    buttonLink: "/service-details2",
  },
];

const starndardService = [
  {
    image: "01",
    title: "Food Mart",
    link: "/service-details",
    alt: "Snack aisles and drink coolers inside Santiago Food Mart",
    description:
      "Stop in for everything you need on the go. Cold drinks, snacks, and daily essentials all in one convenient location.",
  },
  {
    image: "02",
    title: "Check Cashing & Auto Registration",
    link: "/service-details3",
    alt: "Check cashing counter",
    description:
      "Skip the DMV lines. We cash checks and handle your vehicle registration and renewals right in store, so you can stay road legal without the wait.",
  },
  {
    image: "03",
    title: "Hand Wash",
    link: "/service-details2",
    alt: "Santiago Hand Wash building and 76 sign",
    description:
      "We welcome you to Santiago Hand Wash. Since opening in 1996, we have grown to provide our customers with the best quality hand wash experience.",
  },
];

// Photos of the 2022 remodel
const NewStorePhotos = [
  { src: "/assets/images/web/bg-image-24-1200.webp", alt: "Remodeled store with new floors and racks" },
  { src: "/assets/images/web/corporate-02-1200.webp", alt: "Redesigned check cashing counter" },
  { src: "/assets/images/web/about-8-1200.webp", alt: "New bathroom" },
  { src: "/assets/images/web/bg-image-25-1200.webp", alt: "Coffee station and snacks" },
  { src: "/assets/images/web/bg-image-26-1200.webp", alt: "Hot food counter" },
];

const NewStoreHighlights = [
  "Redesigned Check Cashing",
  "New Bathrooms",
  "Re-Faced Coolers",
  "All New Floors and Racks",
];

const CheckCashingHours = [
  { day: "Monday – Friday", hours: "10am – 7pm" },
  { day: "Saturday", hours: "10am – 5pm" },
  { day: "Sunday", hours: "Closed" },
];

const photoSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  lazyLoad: "ondemand",
};

class CorporateBusiness extends Component {
  render() {
    return (
      <Fragment>
        <Helmet
          pageTitle="Santiago 76 | Food Mart, Hand Car Wash & Check Cashing in Santa Ana"
          description="Santiago 76 in Santa Ana: food mart, 100% hand car wash and detailing, check cashing and auto registration. Family owned since 1996."
        />

        <Header headerPosition="header--static logoresize" color="color-black" />

        {/* Start Slider Area   */}
        <div className="slider-wrapper site-hero">
          <div className="slider-activation">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          <h1 className="title">{value.title}</h1>
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-solid"
                              href={value.buttonLink}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Featured Service Area  */}
        <div className="rn-featured-service-area pt--90 pb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mt--30">
                <div className="section-title">
                  <h2 className="title">Services</h2>
                  <p>
                    We do it all! From Hand Wash, Check Cashing, and Auto
                    Registration all in one location.
                  </p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {starndardService.map((value, index) => (
                    <div className="col-lg-4 col-md-4 mt--30" key={index}>
                      <a className="standard-service site-service-card" href={value.link}>
                        <div className="thumbnai">
                          <img
                            src={`/assets/images/web/corporate-${value.image}-700.webp`}
                            alt={value.alt}
                            loading="lazy"
                          />
                        </div>
                        <div className="content">
                          <h3>{value.title}</h3>
                          <p>{value.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Featured Service Area  */}

        {/* Start New Store Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6">
                <div className="site-photo-slider">
                  <Slider className="rn-slick-dot dot-light" {...photoSlider}>
                    {NewStorePhotos.map((photo) => (
                      <div key={photo.src}>
                        <img src={photo.src} alt={photo.alt} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-6 mt_md--40 mt_sm--40">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">Check Out Our New Store!</h2>
                    <p>
                      Complete re-model finished in 2022 for a new and exciting
                      look.
                    </p>
                  </div>
                  <ul className="list-style--1 site-checklist mt--30">
                    {NewStoreHighlights.map((item) => (
                      <li key={item}>
                        <FiCheck /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="about-button mt--40">
                    <a className="rn-button-style--2 btn-solid" href="/about">
                      See our history
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End New Store Area  */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-7 order-2 order-lg-1 mt_md--40 mt_sm--40">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About Us</h2>
                    <p className="description">
                      Located on I-5 & 17th Street next to Guaranty Chevrolet,
                      Santiago Food Mart and Hand Wash has been servicing our
                      customers in Santa Ana since 1996. Family owned and
                      operated, we are known for our quality control, your 100%
                      satisfaction, and being committed to quality service and
                      value. Being a family owned business allows us to adapt to
                      the community's requests on a daily basis. We appreciate
                      our customers' input on what they would like to see in our
                      store to help make our corner a higher quality place of
                      business.
                    </p>
                    <p className="description">
                      Most of our team here at Santiago Food Mart and Hand Wash
                      have been working for us for over 20 years. Our managers
                      Manny Alonso and Santiago Mondragon have been with us for
                      over 22 years and are always happy to assist you. If there
                      is something you need, please don’t hesitate to ask.
                    </p>
                  </div>

                  <div className="row mt--20">
                    <div className="col-md-6 mt--20">
                      <div className="site-hours-card">
                        <h4>Check Cashing / Auto Registration Hours</h4>
                        <ul className="cw-hours">
                          {CheckCashingHours.map((h) => (
                            <li key={h.day}>
                              <span>{h.day}</span>
                              <strong>{h.hours}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mt--20">
                      <div className="site-hours-card">
                        <h4>
                          Car Wash Hours{" "}
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
              <div className="col-lg-5 order-1 order-lg-2">
                <img
                  className="w-100 site-rounded"
                  src="/assets/images/web/about-1-1200.webp"
                  alt="76 gas pump at Santiago 76"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Brand Area  */}
        <div className="rn-brand-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo branstyle="branstyle--2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <CallAction />

        <FooterTwo />

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default CorporateBusiness;
