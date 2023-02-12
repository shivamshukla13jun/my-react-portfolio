import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <section className="banner" id='Banner'>
                <div className="banner-area">
                    <div className="container">
                        <div className="section-wrapper banner-wrapper">
                            <div className="row ">
                                <div className="col-lg-6 col-12">
                                    <div className="banner-content text-start">
                                        <h1>Hello...</h1>
                                        <h1>I'm <span>Shivam</span> Shukla A Professional</h1>
                                        <div className="dynamic-title cd-headline clip is-full-width">
                                            <h1 className="cd-words-wrapper">
                                                <b className="is-visible gold-title">Web Developer</b>
                                            </h1>
                                        </div>
                                        <a className="btn" href="#"><span>View My Portfolio</span><img src="assets/images/icon/btn-1.png" alt="icon" className="img-fluid" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="banner-thumb">
                                        <img src="https://avatars.githubusercontent.com/u/107310556?v=4" alt="banner" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;