import React, { useState, useEffect } from 'react';
import "./About.css";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const About = () => {

    const carouselContent = [
        {
            imgSrc: "./icon-3.png",
            title: "Hot Water System",
            content: "Tempas egestas sed sed risus. Ultirces tristique nulla aliquet enim.Sed egastas egastas fingulla phasellus."
        },
        {
            imgSrc: "./icon-4.png",
            title: "Water Heater Repair",
            content: "Tempas egestas sed sed risus. Ultirces tristique nulla aliquet enim.Sed egastas egastas fingulla phasellus."
        },
        {
            imgSrc: "./icon-5.png",
            title: "Leak Detection",
            content: "Tempas egestas sed sed risus. Ultirces tristique nulla aliquet enim.Sed egastas egastas fingulla phasellus."
        },
        {
            imgSrc: "./icon-3.png",
            title: "Hot Water System",
            content: "Tempas egestas sed sed risus. Ultirces tristique nulla aliquet enim.Sed egastas egastas fingulla phasellus."
        }
    ]

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true, // Enable dots navigation
        dotsClass: 'slick-dots', // CSS class for styling the dots
    };

    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
    }, [])


    return (
        <div>
            {loader && <div className='container-fluid'> <div className="loader-container">
                <div>
                    <img className="spinner" src="./tap.png"></img>
                </div>
            </div>
            </div>}

            {!loader && <div className='container-fluid'>
                <section class="wpo-page-title">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="wpo-breadcumb-wrap">
                                    <h2 className='about-header'>About us</h2>
                                    <ol class="wpo-breadcumb-wrap">
                                        <h4><Link className='about-link' to="/home">Home</Link> <span className='about-header-text'>.</span> <span className='about-header-text'>About</span></h4>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-2 */}

                <section className='home-section2'>

                    <div className='section-2 mt-5 pt-5'>
                        <div className='empty-content'>

                        </div>

                        <div className="row block2-sub-block text-start mt-5">
                            <div data-aos="fade-right" className='d-none d-xl-block col-lg-6 p-0'>
                                <img src='./img-4.jpg'></img>
                            </div>
                            <div data-aos="fade-left" className='col-sm-12 col-md-6 block2-side-content'>
                                <h2 className="block2-head-content">Different types of fixtures, such as faucets, toilets, and showers</h2>
                                <p className="block2-text-content mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</p>

                                <div className="block2-sub-content mt-5">
                                    <div className="mx-0">
                                        <div className="block2-icon text-start">
                                            <img className='block2-img-1' src='./about-icon-1.png'></img>
                                        </div>
                                        <h4 className='block2-sub-head mt-4'>Plumbing Specialists</h4>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    </div>

                                    <div className="mx-3">
                                        <div className="block2-icon text-start">
                                            <img className='block2-img-1' src='./about-icon-2.png'></img>
                                        </div>
                                        <h4 className='block2-sub-head mt-3 pt-1'>Plumbing Specialists</h4>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    </div>

                                </div>

                                <div className='text-start mt-3'>
                                    <button className='btn btn-primary block1-btn'>Learn More About Us</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

                {/* section-3 */}

                <section>
                        <div className='row'>

                            <div className='back-to-top'>
                                <a className='top-btn' href='#'><i class="fas fa-arrow-up"></i></a>
                            </div>

                            <div className='text-center'>

                                <p className='block3-header'><span className='dot'>.</span> OUR SERVICES</p>
                                <h2 className='block3-head-content'>Common Plumbing Problems and Their Solutions</h2>
                            </div>

                            <div className='row d-block d-lg-none'>
                                {
                                    carouselContent.map((data)=>{
                                        return(
                                            <div className="col-sm-12 col-md-6 service-block text-start mb-5 pb-5 mx-3">
                                                <div className='service-img-block mt-5 text-start'>
                                                    <img src={data.imgSrc}></img>
                                                </div>
                                                <h3 className='block3-box-title mt-5'>{data.title}</h3>
                                                <p className='block3-box-content mt-4'>{data.content}</p>
                                                <Link to="/service" className='service-link mb-5' >View Details</Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='d-none d-lg-block pt-3 px-5'>
                                <Slider {...settings}>
                                    {carouselContent.map((data, i) => (
                                        <div key={i}>
                                            <div className="col-sm-12 col-md-12 service-block text-start mb-5 pb-5 px-5">
                                                <div className='service-img-block mt-5 text-start'>
                                                    <img src={data.imgSrc}></img>
                                                </div>
                                                <h3 className='block3-box-title mt-5'>{data.title}</h3>
                                                <p className='block3-box-content mt-4'>{data.content}</p>
                                                <Link to="/service" className='service-link mb-5' >View Details</Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                        </div>
                    </section>


                {/* section-4 */}

                <section>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h4 className='block5-header'><span className='dot'>.</span> OUR PORTFOLIO</h4>
                                <p className='block5-head-content mt-3'>Successful work of FocusBytes</p>
                            </div>

                            <div className='row d-block d-lg-none mx-1'>
                                <div className='col-sm-12 col-md-6 col-lg-4 port-img-block mt-5'>
                                    <div className='port-img-content'>
                                        <h5 className='mt-2'>Prevent Plumbing</h5>
                                        <h3 className='port-img-text mt-2'>Gas Line Service</h3>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-2 mt-5'>
                                    <div className='port-img-content'>
                                        <h5 className='mt-2'>Prevent Plumbing</h5>
                                        <h3 className='port-img-text mt-2'>Water Line Repair</h3>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-3 mt-5'>
                                    <div className='port-img-content'>
                                        <h5 className='mt-2'>Prevent Plumbing</h5>
                                        <h3 className='port-img-text mt-2'>Basement Plumbing</h3>
                                    </div>
                                </div>

                                <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-4 mt-5'>
                                    <div className='port-img-content'>
                                        <h5 className='mt-2'>Prevent Plumbing</h5>
                                        <h3 className='port-img-text mt-2'>Kitchen Plumbing</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='row d-none d-lg-block'>
                                <Slider {...settings2}>
                                    <div className='col-sm-12 col-md-6 col-lg-4 port-img-block mt-5'>
                                        <div className='port-img-content'>
                                            <h5 className='mt-2'>Prevent Plumbing</h5>
                                            <h3 className='port-img-text mt-2'>Gas Line Service</h3>
                                        </div>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-2 mt-5'>
                                        <div className='port-img-content'>
                                            <h5 className='mt-2'>Prevent Plumbing</h5>
                                            <h3 className='port-img-text mt-2'>Water Line Repair</h3>
                                        </div>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-3 mt-5'>
                                        <div className='port-img-content'>
                                            <h5 className='mt-2'>Prevent Plumbing</h5>
                                            <h3 className='port-img-text mt-2'>Basement Plumbing</h3>
                                        </div>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-4 port-img-block-4 mt-5'>
                                        <div className='port-img-content'>
                                            <h5 className='mt-2'>Prevent Plumbing</h5>
                                            <h3 className='port-img-text mt-2'>Kitchen Plumbing</h3>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>


                {/* section-5 */}

                <section>
                    <div className='row footer-details mt-5 pb-5'>
                        <div className='col-sm-12 col-md-6 col-lg-3 mt-5 pt-5 px-5'>
                            <h2 className='footer-logo text-start'>LOGO</h2>
                            <p className='footer-sec1-content text-start mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt labore et dolore magna aliqua</p>
                            <div className='footer-buttons text-start mt-4'>
                                <button className='footer-sec1-btns btn btn-primary'><i class="fab fa-facebook-square"></i></button>
                                <button className='footer-sec1-btns btn btn-primary'><i class="fab fa-twitter-square"></i></button>
                                <button className='footer-sec1-btns btn btn-primary'><i class="fab fa-instagram-square"></i></button>
                                <button className='footer-sec1-btns btn btn-primary'><i class="fab fa-google-plus-square"></i></button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 text-start mt-5 pt-5 px-5">
                            <h3 className='footer-sec2-header'>- Help Center</h3>
                            <p className='footer-sec2-tags mt-4'>- Customer Support</p>
                            <p className='footer-sec2-tags'>- All Brand Tyre Shop</p>
                            <p className='footer-sec2-tags'>- Terms & Conditions</p>
                            <p className='footer-sec2-tags'>- Support Center</p>
                            <p className='footer-sec2-tags'>- Privacy Policy</p>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 text-start mt-5 pt-5 px-5">
                            <h3 className='footer-sec2-header'>- Resource</h3>
                            <p className='footer-sec2-tags mt-4'>- Free Training</p>
                            <p className='footer-sec2-tags'>- Working Tutorials</p>
                            <p className='footer-sec2-tags'>- Blog Post</p>
                            <p className='footer-sec2-tags'>- Our Work Stations</p>
                            <p className='footer-sec2-tags'>- Contact Us</p>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 text-start mt-5 pt-5">
                            <h3 className='footer-sec2-header'>Newsletter :</h3>
                            <input type='email' className='form-control footer-input text-start mt-4' placeholder='Enter your email:'></input>
                            <button className='btn btn-primary footer-button mt-3 mb-3'>Subscribe Now</button>
                        </div>
                    </div>
                </section>


            </div>
            }
        </div>



    )
}
