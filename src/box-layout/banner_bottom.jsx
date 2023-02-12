import React, { Component } from 'react';

class Banner_bottom extends Component {
    render() {
        return (
            <section className="banner-bottom text-start">
                <div className="banner-bottom-pattan"></div>
                <div className="container">
                    <div className="bottom-wrapper section-wrapper">
                        <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-thumb">
                                <img src="assets/images/icon/01.png" alt="banner" />
                            </div>
                            <div className="post-content">
                                <h5>Give me a Call</h5>
                                <h5><span>845-597-842-41</span></h5>
                            </div>
                        </div>
                        <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="post-thumb">
                                <img src="assets/images/icon/02.png" alt="banner" />
                            </div>
                            <div className="post-content">
                                <h5>Send us a Message</h5>
                                <h5><span>shivamshukla13jun@mail.com</span></h5>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner_bottom;