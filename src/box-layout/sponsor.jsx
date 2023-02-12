import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const sponsorList = [
    {
        imgUrl: "assets/images/sponsor/01.png",
		imgAlt: 'Sponsor',
    },
    {
        imgUrl: "assets/images/sponsor/02.png",
		imgAlt: 'Sponsor',
    },
    {
        imgUrl: "assets/images/sponsor/03.png",
		imgAlt: 'Sponsor',
    },
    {
        imgUrl: "assets/images/sponsor/04.png",
		imgAlt: 'Sponsor',
    },
    {
        imgUrl: "assets/images/sponsor/05.png",
		imgAlt: 'Sponsor',
    },
    {
        imgUrl: "assets/images/sponsor/06.png",
		imgAlt: 'Sponsor',
    },
]

class Sponsor extends Component {
    render() {
        return (
            <div className="sponsor wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="container">
                    <div className="section-wrapper">
                    <Swiper className="sponsor-slider"
                            spaceBetween={0}
                            // slidesPerView={6}
                            loop={'true'}
                            autoplay={'true'}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 2,
                                },
                                340: {
                                    width: 340,
                                    slidesPerView: 3,
                                },
                                576: {
                                    width: 576,
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {sponsorList.map( (val , i) => (
                                <SwiperSlide className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
                                    <div className="sponsor-item">
                                        <img 
                                            src={`${val.imgUrl}`} 
                                            alt={`${val.imgAlt}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsor;