import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    menuTrigger() {
        document.querySelector('body').classList.add('show-menu')
        document.querySelector('.mobile-header').classList.add('close')
    }
    closeMenuTrigger() {
        document.querySelector('body').classList.remove('show-menu')
        document.querySelector('.mobile-header').classList.remove('close')
    }
    render() {
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.primary-menu').classList.add(['bg-white'])
            }else{
                document.querySelector('.primary-menu').classList.remove(['bg-white'])
            }
        });
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 1020) {
                document.querySelector('body').classList.remove(['d-shape'])
                document.querySelector('.banner-wrapper').classList.add(['banner-none'])
            }else{
                document.querySelector('.banner-wrapper').classList.remove(['banner-none'])
            }
        });
        return (
            <Fragment>
                <div className="mobile-menu">
                    <nav className="mobile-header d-xl-none">
                        {/* <div className="header-logo">
                            <Link to="/" className="logo"><img src="./assets/images/logo/logo.gif" alt="logo" /></Link>
                        </div> */}
                        <div className="header-bar" id="open-button" onClick={this.menuTrigger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                    <div className="menu-wrap">
                        <div className="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
                                <path fill='#fff' d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/>
                            </svg>
                        </div>
                        <nav className="menu">
                            <div className="mobile-menu-area d-xl-none">
                                <div className="mobile-menu-area-inner" id="scrollbar">
                                    <div className="header-bar m-menu-bar">
                                        {/* <Link to="/" className="logo"><img src="./assets/images/logo/logo.gif" alt="logo" /></Link> */}
                                        <div className="close-button" id="close-button" onClick={this.closeMenuTrigger}></div>
                                    </div>
                                    <ul className="m-menu">
                                        <li className="active"><a href="/#Banner">Home</a></li>
                                        <li><a href="/#About">About Me</a></li>
                                        <li><a href="/#Resume">Resume</a></li>
                                        <li><a href="/#Services">Services</a></li>
                                        <li><a href="/#Portfolio">Portfolio</a></li>
                                        <li><a href="/#Pricing">Pricing</a></li>
                                        <li><a href="/#Blog">Blog</a></li>
                                        <li><a href="/#Contact">Contact</a></li>
                                    </ul>
                                    <ul className="social-link-list d-flex flex-wrap">
                                        <li><a href="#" className="facebook"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#" className="twitter-sm"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#" className="linkedin"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#" className="google"><i className="icofont-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header-section d-none d-xl-block">
                    <header className="header">
                        <nav className="primary-menu">
                            <div className="container">
                                <div className="menu-area">
                                    <div className="row no-gutters justify-content-between align-items-center">
                                        {/* <div className="header-logo">
                                            <Link to="/" className="logo"><img src="./assets/images/logo/logo.gif" alt="logo" /></Link>
                                        </div> */}
                                        <ul className="main-menu d-flex">
                                            <li className="active"><a href="/#Banner">Home</a></li>
                                            <li><a href="/#About">About Me</a></li>
                                            <li><a href="/Shivam Shukla.pdf" download>Resume</a></li>
                                            <li><a href="/#Services">Services</a></li>
                                            <li><a href="/#Portfolio">Portfolio</a></li>
                                            {/* <li><a href="/#Pricing">Pricing</a></li> */}
                                            {/* <li><a href="/#Blog">Blog</a></li> */}
                                            {/* <li><a href="/#Contact">Contact</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </Fragment>
        );
    }
}

export default Header;