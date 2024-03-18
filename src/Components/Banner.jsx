import React from 'react'
import { AiFillGithub, AiFillInstagram, } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Profile from "../assets/Profile.png"
function Banner() {
    return (
        <header>
            <img src="https://images.pexels.com/photos/16105561/pexels-photo-16105561.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="banner" loading='lazy' />
            <div className="overlay"></div>
            <div className="container">
                <div className="inner-content">
                    <img src={Profile} alt="profile" loading='lazy' />
                    <div className="personal-info">
                        <h1>Saksham Kamboj</h1>
                        <p>Web Developer</p>
                        <div className="bio">
                            <div className="row">
                                <div className="info">Age</div>
                                <div className="detail">24Yr</div>
                                <div className="info">Phone</div>
                                <div className="detail">+917618274722</div>
                                <div className="info">Email</div>
                                <div className="detail">sakshamkamboj2072@gmail.com</div>
                                <div className="info">Address</div>
                                <div className="detail">Saharanpur, Uttar Pradesh</div>
                            </div>
                        </div>
                        <div className="social">
                            <div className="links">
                                <a href="https://github.com/Saksham-Kamboj" target='_blank'>
                                    <AiFillGithub />
                                </a>
                            </div>
                            <div className="links">
                                <a href="https://www.instagram.com/kamboj_0_0_7" target='_blank'>
                                    <AiFillInstagram />
                                </a>
                            </div>
                            <div className="links">
                                <a href="https://www.facebook.com/saksham.kamboj.96/" target='_blank'>
                                    <FaFacebookSquare />
                                </a>
                            </div>
                            <div className="links">
                                <a href="https://www.linkedin.com/in/sakshamkamboj" target='_blank'>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
