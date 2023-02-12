import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="text-center">
                        {/* <Link to="/" className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s"><img src="assets/images/logo/footer-logo.png" alt="footer" /></Link>
                        */}
                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            &copy; 2023.  Designed By <Link to="/">Shivam</Link>
                        </p>
                        {/* <ul className="social-link-list wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <li>
                                <a href="#"><i className="icofont-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icofont-vimeo"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icofont-rss"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icofont-dribbble"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icofont-instagram"></i></a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;