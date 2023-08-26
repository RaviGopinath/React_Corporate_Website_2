import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";
import { useForm } from "react-hook-form";

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
    }, [])

    const onSubmit = (event) => {
        event.preventdefault();
    }

    return (
        <div>
            {loader? (<div className='container-fluid'> <div className="loader-container">
                <div>
                    <img className="spinner" src="./tap.png"></img>
                </div>
            </div>
            </div>) :
            (<div className='container-fluid'>
                <section class="wpo-page-title">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="wpo-breadcumb-wrap">
                                    <h2 className='about-header'>Contact Us</h2>
                                    <ol class="wpo-breadcumb-wrap">
                                        <h4><Link className='about-link' to="/home">Home</Link> <span className='about-header-text'>.</span> <span className='about-header-text'>Contact Us</span></h4>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-2 */}

                <section>
                    <div className='row contact-cards mt-5 mb-5'>
                        <div className='col-sm-12 col-lg-3'>
                            <div className='card card-contact'>
                                <div className='card-icon text-center mt-4'>
                                    <span className='contact-icon'><i class="fas fa-map-marker-alt"></i></span>
                                </div>
                                <h3 className='contact-tag'>Address</h3>
                                {/* <p className='contact-text mb-5'>7 Green Lake Street, Crawfordsville, IN 47933</p>     */}
                                <div className='mb-5'>
                                    <span className='contact-text'>7 Green Lake Street ,</span> <br></br>
                                    <span className='contact-text mb-5'>Crawfordsville, IN 47933</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-lg-3'>
                            <div className='card card-contact'>
                                <div className='card-icon text-center mt-4'>
                                    <span className='contact-icon'><i class="fas fa-envelope"></i></span>
                                </div>
                                <h3 className='contact-tag'>Email Us</h3>
                                <div className='mb-5'>
                                    <span className='contact-text'>focusbytes@gmail.com</span> <br></br>
                                    <span className='contact-text mb-5'>focusbytes.info@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-lg-3'>
                            <div className='card card-contact'>
                                <div className='card-icon text-center mt-4'>
                                    <span className='contact-icon'><i class="fas fa-phone-alt"></i></span>
                                </div>
                                <h3 className='contact-tag'>Call Now</h3>
                                <div className='mb-5'>
                                    <span className='contact-text'>+1 800 123 456 789</span> <br></br>
                                    <span className='contact-text mb-5'>+1 800 123 654 987</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='back-to-top'>
                            <a className='contact-top-btn' href='#'><i class="fas fa-arrow-up"></i></a>
                    </div>
                </section>

                {/* section-3 */}

                <section className='mt-5 pt-5'>
                    <h2 className='block3-contact-header'>Have Any Question?</h2>
                    <p className='block3-contact-content'>It is a long established fact that a reader will be distracted content of a page when looking.</p>
                </section>

                {/* section-4 */}

                <div className='row contact-form-block'>
                    <div className='col-sm-12 col-lg-8'>
                        <div className='card mt-5'>
                            <form className='contact-form mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-6'>
                                        <input {...register("name", { required: "Please enter your name" })} className='form-control contact-input' type='text' placeholder="Your Name*"></input>
                                        {errors?.name && <p className='text-danger text-start'>{errors.name.message}</p>}
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <input {...register("email", { required: "Please enter your email" })} className='form-control contact-input email-input' type='email' placeholder="Your Email*"></input>
                                        {errors?.email && <p className='text-danger text-start'>{errors.email.message}</p>}
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <input {...register("address", { required: "Please enter your address" })} className='form-control contact-input mt-5' type='text' placeholder="Address*"></input>
                                        {errors?.address && <p className='text-danger text-start'>{errors.address.message}</p>}
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <select {...register("service", { required: "Please select the service" })} className='form-select contact-input mt-5'>
                                            <option value="" disabled="disabled" selected>Services</option>
                                            <option value="architecture">Architecture</option>
                                            <option value="the rehearsal dinner">The Rehearsal Dinner</option>
                                            <option value="the afterparty">The Afterparty</option>
                                            <option value="videographers">Videographers</option>
                                            <option value="perfect cake">Perfect Cake</option>
                                            <option value="all the above">All the above</option>
                                        </select>
                                        {errors?.service && <p className='text-danger text-start'>{errors.service.message}</p>}
                                    </div>
                                    <div className='col-12'>
                                        <textarea className='form-control contact-form-texarea mt-5' placeholder='message...'></textarea>
                                    </div>
                                </div>

                                <button className='btn btn-primary contact-form-button mt-5'>Get In Touch</button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* section-5 */}

                <section>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe className='contact-map' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WorkFlo,Greeta%20Tech%20Park,Phase%201,%20No.99-OMR,Industrial%20Estate,%20Perungudi,%20Chennai-600096+(Focusbytes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                        </div>
                    </div>
                </section>

                {/* section-6 */}

                <section>
                    <div className='row footer-details pb-5'>
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
            )}
        </div>
    )
}
