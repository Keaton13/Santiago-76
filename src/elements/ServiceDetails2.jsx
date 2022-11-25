import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class ServiceDetails2 extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Santiago Hand Wash & Detailing</h2>
                                    <p>We Focus on the Details!</p>
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
                                                    <img className="w-100" src="/assets/images/featured/corporate-6.jpg" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>We welcome you to Santiago Hand Wash. Since opening in 1996, we have grown to provide our customers with the best quality hand car wash experience. We take pride in our quality of services and on the importance of our customers expectations. In addition to all of our exterior and full service hand washes, we are your one-stop detail center. All of our customers are provided with the best quality and value in name brand wash services using companies such as Meguiar’s,™ Blue Coral ,™ Magic Clay ,™ Lexol ™ and ArmorAll .™</p>
                                                    <p>In addition, we utilize micro fiber towels, which give our detail services it’s extra streak-free shine. No longer do you need to fear other car wash lingo and overpriced packages. At Santiago Hand Wash we simplify and take away the unknown to fully satisfy you. Come find out what Santiago Hand Wash can provide you, and your vehicles. </p>
                                                    <h4 className="title">Open Daily</h4>
                                                    <ul className="liststyle">
                                                        <li>8am - 5pm</li>
                                                        <li>Weather Permiting*</li>
                                                        {/* <li>Abominable this abidin far successfully then like piquan</li>
                                                        <li>Risus commodo viverra</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}

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
        )
    }
}
export default ServiceDetails2;