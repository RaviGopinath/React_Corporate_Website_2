import React, { useState, Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {

    const [show, setShow] = useState(false);

    const openToggle = () => {
        setShow(true);
    }

    const closeToggle = () => {
        setShow(false);
    }

    return (
        <Fragment>
            <div className='col-12 d-none d-md-block'>
                <div className="nav">
                    <div className='header-logo mx-5'><h3>LOGO</h3></div>
                    <div className='header-nav'>
                        <div className='nav-items mx-4'>
                            <NavLink className='nav-tags-lg' activeClassName="custom-active" to="home">Home</NavLink>
                        </div>
                        <div className='nav-items mx-4'>
                            <NavLink className='nav-tags-lg' activeClassName="custom-active" to="about">About Us</NavLink>
                        </div>
                        <div className='nav-items mx-4'>
                            <NavLink className='nav-tags-lg' activeClassName="custom-active" to="service">Service</NavLink>
                        </div>
                        <div className='nav-items mx-4'>
                            <NavLink className='nav-tags-lg' activeClassName="custom-active" to="contact">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-block d-md-none'>
                <div className="nav-sm">
                    <div className='header-logo'><h3 >LOGO</h3></div>
                    <div>
                        <button className='btn btn-primary' onClick={openToggle}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                {show && <div className="toggle-bars">
                    <div className="text-end">
                        <button className="btn btn-primary button-closing" onClick={closeToggle}><i class="fas fa-times"></i></button>
                    </div>
                    <ul className='listed-items pt-3'>
                        <NavLink className='nav-tags' to="home" onClick={closeToggle}>Home</NavLink> <br></br>
                        <NavLink className='nav-tags' to="about" onClick={closeToggle}>About Us</NavLink> <br></br>
                        <NavLink className='nav-tags' to="service" onClick={closeToggle}>Service</NavLink> <br></br>
                        <NavLink className='nav-tags' to="contact" onClick={closeToggle}>Contact Us</NavLink>
                    </ul>

                </div>}
            </div>

        </Fragment>
    )
}
