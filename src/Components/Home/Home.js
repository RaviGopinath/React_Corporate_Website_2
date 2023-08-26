import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './SlickAero';
import { Link } from 'react-router-dom';

// import { Carousel } from "react-responsive-carousel";

export const Home = () => {

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

    const teamMembers = [
        {
            imgSrc: './member-1.jpg',
            name: "Sandra Garrett",
            role: "Project Manager"
        },
        {
            imgSrc: './member-2.jpg',
            name: "Santos Cunning",
            role: "Project Manager"
        },
        {
            imgSrc: './member-3.jpg',
            name: "Merle Salazar",
            role: "Project Manager"
        },
        {
            imgSrc: './member-4.jpg',
            name: "Max Kelly",
            role: "Project Manager"
        }
    ];

    const customerTerminal = [
        {
            imgSrc: './customer-1.jpg',
            name: "M. Jackson",
            role: "Consultant",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eius possimus est animi fugiat eos molestiae vel"
        },
        {
            imgSrc: './customer-2.jpg',
            name: "M. Jackson",
            role: "Consultant",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eius possimus est animi fugiat eos molestiae vel"
        },
        {
            imgSrc: './customer-3.jpg',
            name: "M. Jackson",
            role: "Consultant",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eius possimus est animi fugiat eos molestiae vel"
        }
    ];

    const PrevArrow = ({ onClick }) => (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            &lt;
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="slick-arrow slick-next" onClick={onClick}>
            &gt;
        </div>
    );

    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 2500
    };

    const [loader, setLoader] = useState(false);


    const blogContent = [
        {
            day: 23,
            month: "AUGUST",
            imgSrc: './blog-img-1.jpg',
            title: "How To Stage Your Home For Maximum Buyer Apppeal",
            content: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make."
        },
        {
            day: 25,
            month: "AUGUST",
            imgSrc: './blog-img-2.jpg',
            title: "Understanding the Importance of Water",
            content: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make."
        },
        {
            day: 30,
            month: "AUGUST",
            imgSrc: './blog-img-3.jpg',
            title: "How To Stage Your Home For Maximum Buyer Apppeal",
            content: "Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make."
        }
    ]

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
        AOS.init();
    }, [])


    return (
        <div>
            {loader ? (<div className='container-fluid'> <div className="loader-container">
                <div>
                    <img className="spinner" src="./tap.png"></img>
                </div>
            </div>
            </div>) :
                (<div className='container-fluid'>

                    {/* section-1 */}

                    <section>
                        <div className='row'>

                            <div className='col-sm-12 col-lg-6 mt-5 pt-5 block1-sub-1 text-start px-5'>
                                <h2 className='block1-content '> Water <span className='block1-highlight'>Heater</span> Installation and <br></br> Repair</h2>
                                <p className="block1-text">We understand that plumbing emergencies can happen at any time, day or night.</p>
                                <button className="btn btn-primary block1-btn"><Link className='link-tag' to="/service">View Our Services</Link></button>
                            </div>

                            <div className='d-none d-md-block col-md-6 col-lg-3 mt-5'>
                                <img className='block1-img-1' src="./img-1.jpg"></img>
                                <img className='block1-img-2 mt-3' src="./img-2.jpg"></img>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 block1-img-block-3 mt-5'>
                                <img className='block1-img-3' src="./img-3.jpg"></img>
                            </div>

                        </div>
                    </section>

                    {/* section-2 */}

                    <section className='home-section2'>

                        <div className='section-2 mt-5 pt-5'>
                            <div className='empty-content'>

                            </div>

                            <div className="row block2-sub-block mt-5">
                                <div data-aos="fade-right" className='d-none d-xl-block col-lg-6 p-0'>
                                    <img src='./img-4.jpg'></img>
                                </div>
                                <div data-aos="fade-left" className='col-sm-12 col-md-6 block2-side-content'>
                                    <h2 className="block2-head-content text-start">Different types of fixtures, such as faucets, toilets, and showers</h2>
                                    <p className="block2-text-content text-start mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</p>

                                    <div className="block2-sub-content mt-5">
                                        <div className="mx-0">
                                            <div className="block2-icon text-start">
                                                <img className='block2-img-1' src='./about-icon-1.png'></img>
                                            </div>
                                            <h4 className='block2-sub-head text-start mt-4'>Plumbing Specialists</h4>
                                            <p className='text-start mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        </div>

                                        <div className="mx-3">
                                            <div className="block2-icon">
                                                <img className='block2-img-1' src='./about-icon-2.png'></img>
                                            </div>
                                            <h4 className='block2-sub-head text-start mt-3 pt-1'>Plumbing Specialists</h4>
                                            <p className=' text-start mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        </div>

                                    </div>

                                    <div className='ms-auto mt-3'>
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

                                <p className='block3-header mt-4'><span className='dot'>.</span> OUR SERVICES</p>
                                <h2 className='block3-head-content'>Common Plumbing Problems and Their Solutions</h2>
                            </div>

                            <div className='row d-block d-lg-none'>
                                {
                                    carouselContent.map((data) => {
                                        return (
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
                        <div className="row">
                            <div className='col-12'>
                                <h4 className='block4-header'><span className='dot'>.</span> TEAM MEMBERS</h4>
                                <p className='block4-head-content pt-3                                                                                                                                                                                                                      '>Need  a Professional Plumber at Anytime?</p>
                            </div>

                            <div className='row mt-5 team-section'>
                                {
                                    teamMembers.map((data) => {
                                        return (
                                            <div className="col-sm-12 col-md-6 col-lg-3 mt-5 member-block">
                                                <div className='d-none member-icons'>
                                                    <button className='btn btn-primary ico-btns'><i class="fab fa-facebook-square"></i></button>
                                                    <button className='btn btn-primary ico-btns'><i class="fab fa-twitter-square"></i></button>
                                                    <button className='btn btn-primary ico-btns'><i class="fab fa-linkedin"></i></button>
                                                </div>
                                                <div>
                                                    <img className='member-image' src={data.imgSrc}></img>
                                                </div>
                                                <h2 className='member-name mt-3'>{data.name}</h2>
                                                <h3 className="member-role">{data.role}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>

                    {/* section-5 */}

                    <section>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h4 className='block5-header pt-3'><span className='dot'>.</span> OUR PORTFOLIO</h4>
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

                    {/* section-6 */}

                    <section>
                        <div className='row mt-5 pt-3 pb-5 terminal-block'>
                            <h3 className='block6-header mt-5'><span className='dot'>.</span> CUSTOMER TERMINAL</h3>
                            <p className='block6-content mt-3'>Qualification to look for in a reputable plumber</p>

                            {
                                customerTerminal.map((data) => {
                                    return (
                                        <div data-aos="fade-up" className='col-sm-12 col-lg-4 mt-5'>
                                            <div className='customer-border mt-5'>
                                                <div className='card customer-card'>
                                                    <div className='text-start mt-4 mx-3'>
                                                        <img className='star-img' src="./star.png"></img>
                                                        <img className='star-img' src="./star.png"></img>
                                                        <img className='star-img' src="./star.png"></img>
                                                        <img className='star-img' src="./star.png"></img>
                                                        <img className='star-img' src="./star.png"></img>
                                                    </div>
                                                    <p className='terminal-content text-start mt-3 px-3'>{data.content}</p>
                                                    <div className='customer-block text-start mb-3 mx-3'>
                                                        <div className='customer-img-block'>
                                                            <img className='customer-img' src={data.imgSrc}></img>
                                                        </div>
                                                        <div className='customer-details-block mx-5'>
                                                            <h3 className='customer-name'>{data.name}</h3>
                                                            <span>{data.role}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-7 */}

                    <section>
                        <div className='row block7 mt-5'>
                            <div className='block7-linear pt-5'>
                                <div class="circle">
                                    <div class="section-titl-shape-1">
                                        <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                            <g opacity="0.44" filter="url(#filter0_f_1_104)">
                                                <circle cx="343.5" cy="129.5" r="129.5"></circle>
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_1_104" x="0" y="-214" width="687" height="687" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_104"></feGaussianBlur>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="section-titl-shape-2">
                                        <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                                            <g opacity="0.44" filter="url(#filter0_f_1_1050)">
                                                <circle cx="343.5" cy="129.5" r="129.5"></circle>
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_1_1050" x="0" y="-214" width="687" height="687" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1_105"></feGaussianBlur>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className='block6-header'><span className='dot'>.</span> BLOG POST</h3>
                                <p className='block6-content'>Awesome Blog Post & Article</p>
                                <div className='block7-linear-circle'>
                                </div>
                            </div>

                            {
                                blogContent.map((data) => {
                                    return (
                                        <div className='col-sm-12 col-lg-4 mt-5 blog-box'>
                                            <div className='blog-img-box'>
                                                <img className='blog-img' src={data.imgSrc}></img>
                                            </div>
                                            <div className='blog-date px-3'>
                                                <span className='blog-day'>{data.day}</span> <br></br>
                                                <span className='blog-month'>{data.month}</span>
                                            </div>
                                            <div className='blog-details mt-3 pt-5 px-3'>
                                                <p className='blog-title text-start mt-5 px-3'>{data.title}</p>
                                                <p className='blog-content text-start p-3'>{data.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-8 */}

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

                </div>)}
        </div>
    )
}
