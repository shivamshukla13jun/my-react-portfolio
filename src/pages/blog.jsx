import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../layout/sideBar';
import Footer from '../layout/footer';
import Paginate from '../layout/pagination';
import Header from '../layout/header';


const title = "Hello...";
const aftertitle = "World Recend Form";
const beforetitle = " Post";
const spantitle = "My Blog";
const btntext = "View My Portfolio";

let BlogPageItemList = [
    {
        title: "Ectain World Strain Blog Tegc Actuaze Wide World Strateic",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/03.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Rajib Raj",
        adminpost: "14 April 2022",
    },
    {
        title: "Globally streamline innovative users for just in time vortals.",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/04.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Ummi Nishat",
        adminpost: "15 April 2022",
    },
    {
        title: "Competently benchmark resource sucking total linka and covalent leadership skills.",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/05.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Sajahan Sagor",
        adminpost: "14 April 2022",
    },
    {
        title: "Monotonectally whiteboard one-to-one ROI for wireless mindshare.",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/06.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Somrat Islam",
        adminpost: "14 April 2022",
    },
]
class BlogPage extends Component {
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
                                    <div className="blog">
                                        <div className="container">
                                            <div className="section-wrapper">
                                                {BlogPageItemList.map( (val, i) => (
                                                    <div className="post-item" key={i}>
                                                        <div className="post-inner">
                                                            <div className="post-thumb">
                                                                <Link to="/blog_single">
                                                                    <img 
                                                                        src={`${val.imgUrl}`}
                                                                        alt={`${val.imgAlt}`}
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className="post-content">
                                                                <ul className="content-left">
                                                                    <li>
                                                                        <a href="#"><img src="assets/images/blog/icon/01.png" alt="blog" /></a>
                                                                        <p>04</p>
                                                                        <ul className="social-media-list">
                                                                            <li>
                                                                                <a href="https://www.facebook.com" className="facebook"><i className="icofont-facebook"></i></a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="https://twitter.com" className="twitter"><i className="icofont-twitter"></i></a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="https://www.linkedin.com" className="linkedin"><i className="icofont-linkedin"></i></a>
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
                                                                                Admin :<Link to="#">{val.adminname}</Link>
                                                                            </p>
                                                                            <p className="posted-on">
                                                                                Date :<Link to="#">{val.adminpost}</Link>
                                                                            </p>
                                                                        </div>
                                                                        <h3><Link to="/blog_single">{val.title}</Link></h3>
                                                                    </div>
                                                                    <div className="entry-content">
                                                                        <p>{val.desc}</p>
                                                                        <Link to="/blog_single" className="btn">{val.btnText} <i className="icofont-double-right"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Paginate />
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

export default BlogPage;