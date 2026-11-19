import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FiChevronUp, FiCheck, FiPhone, FiMapPin } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const IMG = "/assets/images/carwash";
const PHONE_DISPLAY = "(714) 541-3883";
const PHONE_LINK = "tel:+17145413883";
const ADDRESS = "617 E 17th St, Santa Ana, CA 92701";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

// Short muted clips that loop in the "Watch Us Work" strip
const Reel = [
  { name: "reel-wash-bay", label: "Rolling out of the wash bay" },
  { name: "reel-polish", label: "Machine polish" },
  { name: "reel-wheels", label: "Wheels & tires" },
  { name: "reel-interior", label: "Interior detail" },
];

// Prices from the signs on the lot
const Packages = [
  {
    title: "Exterior Hand Wash",
    prices: [
      { label: "Autos", price: "$20" },
      { label: "Trucks, Vans, SUVs", price: "$25" },
    ],
    includes: ["Soft cloth hand wash", "Hand dry", "Armor All tires"],
  },
  {
    title: "Full Service Hand Wash",
    prices: [
      { label: "Autos", price: "$38" },
      { label: "Trucks, Vans, SUVs", price: "$48" },
    ],
    includes: [
      "Vacuum",
      "Soft cloth hand wash",
      "Clear coat Rainbow Wax",
      "Hand dry",
      "Armor All tires",
    ],
  },
  {
    title: "Diamond Detail",
    prices: [
      { label: "Cars", price: "$249.99" },
      { label: "SUVs & Trucks", price: "$349.99" },
    ],
    includes: [
      "Shampoo carpets",
      "Shampoo seats",
      "Vinyl treatment",
      "Hand wax",
    ],
    note: "Water spot removal and buffing are extra.",
  },
];

const AddOns = [
  "Carpet Shampoo",
  "Seat Shampoo",
  "Vinyl Treatment",
  "Hand Wax Treatment",
  "Hand Clay Treatment",
];

const Gallery = [
  { name: "gallery-bay-wash", alt: "Hand washing a Hyundai Santa Fe in the wash bay" },
  { name: "gallery-hand-dry", alt: "Crew member hand drying the roof of an Acura with a microfiber towel" },
  { name: "gallery-interior-detail", alt: "Detailing the interior of a Dodge Durango" },
  { name: "gallery-machine-polish", alt: "Machine polishing a hood in front of the Santiago Hand Wash sign" },
  { name: "gallery-rear-detail", alt: "Wiping down the rear bumper of a Dodge Durango" },
  { name: "gallery-door-panel", alt: "Cleaning an interior door panel" },
];

class ServiceDetails2 extends Component {
  constructor(props) {
    super(props);
    this.state = { lightboxOpen: false, photoIndex: 0 };
    this.videoRefs = [];
  }

  componentDidMount() {
    // Load and play the clips only when they scroll into view, and not at all
    // for visitors who ask their device for reduced motion.
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      this.videoRefs.forEach((v) => {
        if (!v) return;
        v.src = v.dataset.src;
        if (reduceMotion) v.controls = true;
        else v.play && v.play().catch(() => {});
      });
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            if (!v.src) v.src = v.dataset.src;
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else if (v.src) {
            v.pause();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    this.videoRefs.forEach((v) => v && this.observer.observe(v));
  }

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
  }

  // Scroll with JavaScript rather than relying on the "#prices" jump, which
  // iPhone Safari can ignore on this template.
  scrollToPrices = (e) => {
    const target = document.getElementById("prices");
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  openPhoto(i) {
    this.setState({ lightboxOpen: true, photoIndex: i });
  }

  render() {
    const { lightboxOpen, photoIndex } = this.state;
    const big = (i) => `${IMG}/${Gallery[i].name}.webp`;

    return (
      <React.Fragment>
        <PageHelmet
          pageTitle="Santiago Hand Wash & Detailing | Santa Ana"
          description="100% hand car wash and detailing in Santa Ana since 1996. Exterior hand wash from $20, full service from $38, and Diamond Detail. Get 20¢ off per gallon of gas with any car wash."
        />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Hero */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image cw-hero"
          style={{ backgroundImage: `url(${IMG}/hero.webp)` }}
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Santiago Hand Wash & Detailing
                  </h2>
                  <p>100% hand car wash in Santa Ana since 1996</p>
                  <div className="cw-hero-buttons">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="#prices"
                      onClick={this.scrollToPrices}
                    >
                      <span>See Prices</span>
                    </a>
                    <a className="rn-button-style--2 cw-btn-light" href={PHONE_LINK}>
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro + offers */}
        <div className="cw-section ptb--100 bg_color--1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-title">
                  <h2 className="title">We Focus on the Details</h2>
                  <p>
                    Welcome to Santiago Hand Wash. Since opening in 1996, we have
                    grown to provide our customers with the best quality hand car
                    wash experience. Every car is washed by hand, never by
                    machine brushes, and dried with microfiber towels for a
                    streak-free shine. From a quick exterior wash to a full
                    detail, we keep our pricing simple, so you know exactly what
                    you're getting.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 mt_md--30 mt_sm--30">
                <div className="cw-offer">
                  <span className="cw-offer-amount">20¢ off</span>
                  <p>
                    per gallon of gas when you purchase any car wash
                  </p>
                  <span className="cw-offer-extra">
                    Plus a free air freshener with every hand wash
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch us work */}
        <div className="cw-section pb--100 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2 className="title">Watch Us Work</h2>
                </div>
              </div>
            </div>
            <div className="row cw-reel">
              {Reel.map((clip, i) => (
                <div className="col-lg-3 col-6" key={clip.name}>
                  <figure className="cw-reel-item">
                    <video
                      ref={(el) => (this.videoRefs[i] = el)}
                      data-src={`${IMG}/${clip.name}.mp4`}
                      poster={`${IMG}/${clip.name}-poster.webp`}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-label={clip.label}
                    />
                    <figcaption>{clip.label}</figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prices */}
        <div id="prices" className="cw-section ptb--100 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2 className="title">Wash & Detail Prices</h2>
                  <p>No confusing packages. Pick a wash and we'll take care of the rest.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {Packages.map((pkg) => (
                <div className="col-lg-4 col-md-6 col-12 mt--30" key={pkg.title}>
                  <div className="cw-price-card">
                    <h3>{pkg.title}</h3>
                    <ul className="cw-price-list">
                      {pkg.prices.map((p) => (
                        <li key={p.label}>
                          <span>{p.label}</span>
                          <strong>{p.price}</strong>
                        </li>
                      ))}
                    </ul>
                    <h5>Includes</h5>
                    <ul className="list-style--1">
                      {pkg.includes.map((item) => (
                        <li key={item}>
                          <FiCheck /> {item}
                        </li>
                      ))}
                    </ul>
                    {pkg.note && <p className="cw-note">{pkg.note}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 mt--30">
                <div className="cw-price-card cw-addons">
                  <div className="cw-addons-head">
                    <h3>Detail Add-Ons</h3>
                    <strong>$69.99 each</strong>
                  </div>
                  <ul className="cw-addons-list">
                    {AddOns.map((a) => (
                      <li key={a}>
                        <FiCheck /> {a}
                      </li>
                    ))}
                  </ul>
                  <p className="cw-note">
                    SUVs and trucks are an additional $20. For motor homes and
                    large trucks, please ask in person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crew */}
        <div className="cw-section ptb--100 bg_color--1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <img
                  className="w-100 cw-rounded"
                  src={`${IMG}/crew.webp`}
                  alt="The Santiago Hand Wash crew in front of the shop"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-5 mt_md--30 mt_sm--30">
                <div className="section-title">
                  <h2 className="title">Meet the Crew</h2>
                  <p>
                    Most of our team has been washing cars with us for over 20
                    years. Our managers, Manny Alonso and Santiago Mondragon,
                    have been here since the early days and are always happy to
                    help. Family owned and operated, we treat every car like it's
                    our own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="cw-section pb--100 bg_color--1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                <div className="section-title">
                  <h2 className="title">Products We Trust</h2>
                  <p>
                    We use name brand products from Meguiar's, Armor All, Blue
                    Coral, Lexol, and Clay Magic, along with soft cloth mitts and
                    microfiber towels that are gentle on your paint.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="row row--10">
                  <div className="col-6">
                    <img
                      className="w-100 cw-rounded"
                      src={`${IMG}/products-meguiars.webp`}
                      alt="Meguiar's wash and wax products on a car hood"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="w-100 cw-rounded"
                      src={`${IMG}/products-polish.webp`}
                      alt="Polishing compounds lined up on a car hood"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="cw-section ptb--100 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2 className="title">Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row row--10">
              {Gallery.map((g, i) => (
                <div className="col-lg-4 col-6 mb--20" key={g.name}>
                  <button
                    type="button"
                    className="cw-gallery-item"
                    onClick={() => this.openPhoto(i)}
                    aria-label={`Open photo: ${g.alt}`}
                  >
                    <img
                      src={`${IMG}/${g.name}-thumb.webp`}
                      alt={g.alt}
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={big(photoIndex)}
            nextSrc={big((photoIndex + 1) % Gallery.length)}
            prevSrc={big((photoIndex + Gallery.length - 1) % Gallery.length)}
            imageTitle={Gallery[photoIndex].alt}
            onCloseRequest={() => this.setState({ lightboxOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + Gallery.length - 1) % Gallery.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({ photoIndex: (photoIndex + 1) % Gallery.length })
            }
          />
        )}

        {/* Waiting area */}
        <div className="cw-section ptb--100 bg_color--1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="w-100 cw-rounded"
                  src={`${IMG}/waiting-area.webp`}
                  alt="Remodeled waiting area with red tables and a checkered floor"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="section-title">
                  <h2 className="title">New Waiting Area</h2>
                  <p>
                    Waiting for your car should be the easy part of your day.
                    That's why we completely remodeled our waiting area from the
                    ground up. Relax in comfortable seating with plenty of tables
                    to spread out, catch up on work, or grab a bite from the Food
                    Mart. New flat-screen TVs keep you entertained while our team
                    hand washes your vehicle. We also fully renovated our
                    restrooms: clean, bright, and stocked, because the details
                    matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hours + location */}
        <div className="cw-section ptb--100 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-title">
                  <h2 className="title">Hours & Location</h2>
                  <p className="cw-note mt--0">Weather permitting</p>
                </div>
                <ul className="cw-hours">
                  <li>
                    <span>Winter Hours</span>
                    <strong>8am – 5pm</strong>
                    <small>Last car at 4:30pm</small>
                  </li>
                  <li>
                    <span>Summer Hours</span>
                    <strong>8am – 6pm</strong>
                    <small>Last car at 5:30pm</small>
                  </li>
                </ul>
                <p className="cw-address">
                  <FiMapPin /> {ADDRESS}
                  <br />
                  At the 76 station on 17th St, next to Guaranty Chevrolet
                </p>
                <div className="cw-location-buttons">
                  <a
                    className="rn-button-style--2 btn-solid"
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Get Directions</span>
                  </a>
                  <a className="rn-button-style--2 rn-btn-dark" href={PHONE_LINK}>
                    <span>
                      <FiPhone /> {PHONE_DISPLAY}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 mt_md--30 mt_sm--30">
                <div className="cw-map cw-rounded">
                  <iframe
                    title="Map to Santiago Hand Wash"
                    src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="row row--10 mt--20">
                  <div className="col-6">
                    <img
                      className="w-100 cw-rounded"
                      src={`${IMG}/find-us-pump.webp`}
                      alt="Santiago Hand Wash sign at the 76 gas pumps"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="w-100 cw-rounded"
                      src={`${IMG}/find-us-entrance.webp`}
                      alt="Entrance to the 100% Hand Car Wash bay"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>

        <Footer ctaTagline="Ready For A Clean Car?" />
      </React.Fragment>
    );
  }
}
export default ServiceDetails2;
