import React, { Component } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


const testList = [
    {
        name: 'Robot Doe',
        dagi: 'Founder',
		desc: 'Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme',
		imgUrl: "assets/images/testimonial/01.png",
		imgAlt: 'Testimonial',
		imgUrl2: "assets/images/testimonial/logo/01.png",
		imgUrl3: "assets/images/testimonial/logo/04.png",
    },
    {
        name: 'Ummi Nishat',
        dagi: 'Ceo',
		desc: 'Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme',
		imgUrl: "assets/images/testimonial/02.png",
		imgAlt: 'Testimonial',
		imgUrl2: "assets/images/testimonial/logo/02.png",
		imgUrl3: "assets/images/testimonial/logo/04.png",
    },
    {
        name: 'Rajib Raj',
        dagi: 'Student',
		desc: 'Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme',
		imgUrl: "assets/images/testimonial/03.png",
		imgAlt: 'Testimonial',
		imgUrl2: "assets/images/testimonial/logo/03.png",
		imgUrl3: "assets/images/testimonial/logo/04.png",
    },
]

class Testimonial extends Component {
    render() {
        return (
            <section className="testimonial padding-tb text-start" id='Clients'>
                <div className="container">
                    <div className="section-header">
                        <div className="title">
                            <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">Testimonial</span>
                            <h2 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">Client’s Feedback Latest Reviews <span>From My Clients</span></h2>
                        </div>
                    </div>
                    <div className="section-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <Swiper className="testimonial-slider"
                            loop={'true'}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            spaceBetween={30}
                            autoplay={true}
                            breakpoints={{
                                0: {
                                width: 0,
                                slidesPerView: 1,
                                },
                                768: {
                                width: 768,
                                slidesPerView: 2,
                                },
                                1200: {
                                width: 1200,
                                slidesPerView: 3,
                                },
                            }}
                        >
                            {testList.map( (val , i) => (
                                <SwiperSlide className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
                                    <div className="testimonial-item">
                                        <div className="testimonial-inner">
                                            <div className="testimonial-head">
                                                <div className="testi-top">
                                                    <div className="testimonial-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`} 
                                                        />
                                                    </div>
                                                    <div className="name-des">
                                                        <h5>{val.name}</h5>
                                                        <h6>{val.dagi}</h6>
                                                    </div>
                                                </div>
                                                <img 
                                                    src={`${val.imgUrl2}`} 
                                                    alt={`${val.imgAlt}`}
                                                />
                                            </div>
                                            <div className="testimonial-body">
                                                <p>{val.desc}</p>
                                            </div>
                                            <div className="testimonial-footer">
                                                <ul>
                                                    <li><i className="icofont-ui-rate-blank"></i></li>
                                                    <li><i className="icofont-ui-rate-blank"></i></li>
                                                    <li><i className="icofont-ui-rate-blank"></i></li>
                                                    <li><i className="icofont-ui-rate-blank"></i></li>
                                                    <li><i className="icofont-ui-rate-blank"></i></li>
                                                </ul>
                                                <img 
                                                    src={`${val.imgUrl3}`} 
                                                    alt={`${val.imgAlt}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;