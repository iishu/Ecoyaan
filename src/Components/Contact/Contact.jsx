import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <contact>
            <div id="contact" className="contact">
            <div className="contact-top">
                <div className="contact-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/sell">Sell on Ecoyaan</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of use</a></li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h4>Subscribe</h4>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit">Subscribe</button>
                        <p>By subscribing, you agree to receive notifications <a href="/privacy">Privacy Policy</a></p>
                    </form>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="contact-address">
                    <h4>Registered Address:</h4>
                    <p>1-N-12T-781/1<br/>
                       Sri Krishna Vilasa,<br/>
                       Urvastores,<br/>
                       Ashoknagar(MR),<br/>
                       Mangalore,<br/>
                       Dakshina Kannada- 575006</p>
                </div>
                <div className="contact-legal">
                    <h4>Legal Business Name:</h4>
                    <p>Kindkarma E-Retail Private Limited<br/>
                       CIN: U47912KA2023PTC182592<br/>
                       Telephone: +91 9980490777</p>
                </div>
            </div>
            </div>
        </contact>
    );
}

export default Contact;
