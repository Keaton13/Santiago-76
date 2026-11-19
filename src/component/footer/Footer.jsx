import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>{this.props.ctaTagline || "Ready To Fill Up?"}</span>
                                        <h2>Visit Us <br /> Today!</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="/service-details">Food Mart</a></li>
                                                    <li><a href="/service-details2">Hand Wash</a></li>
                                                    <li><a href="/service-details3">Check Cashing & Registration</a></li>
                                                    <li><a href="/about">History</a></li>
                                                    <li><a href="/contact">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello!</h4>
                                                <ul className="ft-link">
                                                    <li><a href="tel:+17145413883">Phone: (714) 541-3883</a></li>
                                                    <li><a href="https://www.google.com/maps/dir/?api=1&destination=617+E+17th+St+Santa+Ana+CA+92701" target="_blank" rel="noopener noreferrer">617 E 17th St, Santa Ana, CA 92701</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © {new Date().getFullYear()} Santiago 76. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;