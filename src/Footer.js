import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="innerfooter">
                <div className="logo">
                        <li><a href="/"><h1>Lime Tree</h1></a></li>
                </div>
                <div className="firstcontent">
                    <h1> Need Help ?</h1>
                    <p>Terms &amp; Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Legal</p>
                    <p>Advertising</p>
                </div>
                <div className="firstcontent">
                    <h1>About Us</h1>
                    <p>Team</p>
                    <p>Contact</p>
                    <p>Location</p>
                    <p>Our Beliefs</p>
                </div>
                <div className="firstcontent">
                    <h1> Follow Us</h1>
                    <li><a href="/facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="/instagram"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="/twitter"><i class="fa fa-twitter"></i></a></li>

                    <span>
                        &copy; Lime Tree Landscaping Service Provider <br />
                        USA, TX | 12345<br />
                        Unit 123 | Someplace Somewhere <br />
                        123 Street Address Dr <br />
                        Houston <br />

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;