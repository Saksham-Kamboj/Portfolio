import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef();
    const notifyA = (msg) => toast.success(msg);
    const notifyB = (msg) => toast.error(msg);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6i29c8q', 'template_ea08yp1', form.current, 'pcJdj24C7kiPVw2Mm')
            .then((result) => {
                notifyA('Your Message Send Successfully!');
                form.current.reset();
            }, (error) => {
                notifyB(error.text);
            });
    };

    return (
        <section className='contact-us' id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="form-text">
                        <div className="subtitle">Contact Us</div>
                        <h2>GET IN TOUCH.</h2>
                    </div>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="first-column">
                            <div className="input-row">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="input-row">
                                <label htmlFor="number">Phone No.</label>
                                <input type="number" id="number" name='phone_no' required />
                            </div>

                            <div className="input-row">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name='email_id' required />
                            </div>
                        </div>
                        <div className="second-column">
                            <div className="input-row">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name='message' required />
                            </div>

                            <div className="input-row">
                                <button type='submit' value="Send">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer theme="dark" />
        </section>
    )
}

export default Contact
