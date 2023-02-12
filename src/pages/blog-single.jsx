import React, { Component } from 'react';
import SideBar from '../layout/sideBar';
import Footer from '../layout/footer';
import CommentSection from '../ContentData/commentSection';
import CommentRespond from '../ContentData/commentRespond';

const title = "Hello...";
const aftertitle = "World Recend Form";
const beforetitle = " Post";
const spantitle = "My Blog Details";
const btntext = "View My Portfolio";
class Blog_single extends Component {
    render() {
        return (
            <div>
                <div className="shape-top"></div>
                <div className="shape-bottom"></div>
                <section className="banner page-header">
                    <div className="banner-area">
                        <div className="container">
                            <div className="section-wrapper banner-wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-12">
                                        <div className="banner-content">
                                            <h1>{title}</h1>
                                            <h1>{aftertitle} <span>{spantitle}</span> {beforetitle}</h1>
                                            <a className="btn" href="#" download><span>{btntext}</span><img src="assets/images/icon/btn-1.png" alt="icon" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="banner-thumb">
                                            <img src="assets/images/banner/02.png" alt="banner" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="box-shadow-style">
                    <section className="blog-page padding-tb">
                        <div className="container">
                            <div className="section-wrapper g-4">
                                <div className="col-lg-8 sticky-widget">
                                    <div className="blog blog-single">
                                        <div className="container">
                                            <div className="section-wrapper">
                                                <div className="post-item">
                                                    <div className="post-inner">
                                                        <div className="post-thumb">
                                                            <img src="assets/images/blog/03.jpg" alt="blog" />
                                                        </div>
                                                        <div className="post-content">
                                                            <ul className="content-left">
                                                                <li>
                                                                    <a href="#"><img src="assets/images/blog/icon/01.png" alt="blog" /></a>
                                                                    <p>04</p>
                                                                    <ul className="social-media-list">
                                                                        <li>
                                                                            <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="google"><i className="icofont-google-plus"></i></a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><img src="assets/images/blog/icon/02.png" alt="icon" /></a>
                                                                    <p>15</p>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><img src="assets/images/blog/icon/03.png" alt="icon" /></a>
                                                                    <p>12</p>
                                                                </li>
                                                            </ul>

                                                            <div className="content-part">
                                                                <div className="entry-header">
                                                                    <div className="entry-meta">
                                                                        <p className="byline">
                                                                            Admin :<a href="#">Rajib Raj</a>
                                                                        </p>
                                                                        <p className="posted-on">
                                                                            Date :<a href="#">14 April 2022</a>
                                                                        </p>
                                                                    </div>
                                                                    <h3>Ectain World Strain Blog Tegc Actuaze Wide World Strateic</h3>
                                                                </div>
                                                                <div className="entry-content">
                                                                    <p>A wonderful serenity has taken possesion of my entire soul, like these sweet mornins sprin which I enjo with my whole hear I am alone and feel the charm of extence this spot which was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of drawing single stroke at the present moment and yet If feel that I never was a reater artst</p>
                                                                    <p>was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of present moment and yet If feel that I never was</p>
                                                                    <blockquote>
                                                                        <p>Steal into The inner Sanctuary, I Throw Myself Down Among The Hall Grass Buzz The Little World Among The Stalks, And Grow Famar With Count Insec And Fies Then Feel The Presence of The Almighty</p>
                                                                    </blockquote>
                                                                    <p>A wonderful serenity has taken possesion of my entire soul, like these sweet mornins sprin which I enjo with my whole hear I am alone and feel the charm of extence this spot which was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of drawing single stroke at the present moment and yet If feel that I never was a reater artst</p>
                                                                    <p>was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of present moment and yet If feel that I never was</p>
                                                                    <h4>Ectain World Strain Blog Tegc Wide World Strateic</h4>
                                                                    <p>A wonderful serenity has taken possesion of my entire soul, like these sweet mornins sprin which I enjo with my whole hear I am alone and feel the charm of extence this spot which was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of drawing single stroke at the present moment and yet If feel that I never was a reater artst</p>
                                                                    <ul>
                                                                        <li>A wonderfu serenity has taken possesson</li>
                                                                        <li>like these sweet mornings of sprng whch</li>
                                                                        <li>I am alone and feel the charm of exsence</li>
                                                                        <li>whch was created the blss souls like mne</li>
                                                                        <li>I am so happy my dear frend so absobed</li>
                                                                        <li>like these sweet morning of spring whch</li>
                                                                        <li>whch was creaed the blis souls like mine</li>
                                                                        <li>I am so happy my dear frend so aborbed</li>
                                                                        <li>whch was created the blss souls like mne</li>
                                                                    </ul>
                                                                    <img src="assets/images/blog/07.jpg" alt="blog-single" />
                                                                    <h4>Ectain World Strain Blog Tegc Wide World Strateic</h4>
                                                                    <p>was createor the bliss of souls like mine. I am so happy, my dear friend so absribed in the exquisite sense of mere tranqul existence, that I neglect my talents I should bye incapa of present moment and yet If feel that I never was</p>
                                                                </div>
                                                            </div>

                                                            <div className="tags-section">
                                                                <ul className="tags">
                                                                    <li><a href="#">Agency</a></li>
                                                                    <li><a href="#">Business</a></li>
                                                                    <li><a href="#">Personal</a></li>
                                                                </ul>
                                                                <ul className="social-link-list d-flex flex-wrap">
                                                                    <li>
                                                                        <a href="#" className="facebook">
                                                                            <i className="icofont-facebook"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="twitter">
                                                                            <i className="icofont-twitter"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="linkedin">
                                                                            <i className="icofont-linkedin"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="google">
                                                                            <i className="icofont-google-plus"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CommentSection />
                                                <CommentRespond />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 sticky-widget">
                                    <SideBar />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog_single;