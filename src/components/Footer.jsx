import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'
import logo1 from "../assets/logo.png";
import facebook from"../assets/facebook_icon.png";
import Twitter from"../assets/twitter_icon.png";
import linkdin from"../assets/linkedin_icon.png";

const Footer = () => {
    const { pathname } = useLocation();
    const currentPage = decodeURIComponent(pathname);
    if (currentPage === '/about us' || currentPage === '/menu') {
        return null;
    }

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo1} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, ipsum adipisci facere repellat perspiciatis perferendis excepturi officiis quaerat molestias nam
                        ipsa asperiores cum repellendus doloribus consequatur. Nam facilis iusto quam!
                    </p>
                    <div className="footer-social-icon">
                        <img src={facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={linkdin} alt="LinkedIn" />

                    </div>
                    


                </div>
                <div className="footer-content-center">
                    
                    <h2>Company</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/about%20us">About us</a></li>
                        <li><Link to="/contact us">Contact us</Link></li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+91- 789045628</li>
                        <li>contact@gmail.com</li>

                    </ul>

                </div>

            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 Quickbite.com. All rights reserved.</p>

        </div>
    )
}

export default Footer