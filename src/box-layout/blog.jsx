import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../layout/section-header';

let BlogItemList =[
    {
        title: "Ectain World Strain Blog Tegc Actuaze Wide World Strateic",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/01.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Rajib Raj",
        adminpost: "14 April 2022",
    },
    {
        title: "Ectain World Strain Blog Tegc Actuaze Wide World Strateic",
        desc: "Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For",
        btnText: "Read More",
        imgUrl: "assets/images/blog/02.jpg",
        imgAlt: "Blog-Thumb",
        adminname: "Ummi Nishat",
        adminpost: "14 April 2022",
    },
]
const cattitle= <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">Blog Post</span>;
const title= <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">Recent News Latest Posts <span>From My Blog</span></h2>;

class Blog extends Component {
    render() {
        return (
            <section className="blog padding-tb text-start" id='Blog'>
                <div className="container">
                    <div className="blog-header-part">
                        <div className="section-header">
                            <div className="title">
                                <SectionHeader 
                                    cattitle={ cattitle } 
                                    title={ title }
                                />
                            </div>
                        </div>
                        <Link to="/blog" className="btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><span>View All Blog</span><i className="icofont-double-right"></i></Link>
                    </div>
                    <div className="section-wrapper">
                        {BlogItemList.map( (val, i) => (
                            <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
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
                                                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
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
                                                        Admin :<a href="#">{val.adminname}</a>
                                                    </p>
                                                    <p className="posted-on">
                                                        Date :<a href="#">{val.adminpost}</a>
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
                </div>
            </section>
        );
    }
}

export default Blog;