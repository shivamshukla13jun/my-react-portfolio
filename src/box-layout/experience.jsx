import React, { Component } from 'react';

import SectionHeader from '../layout/section-header';

// section header
const cattitle = <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">Education & Experience</span>
const title = <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">I Have Completed My Master <span>Degree & Experience</span> With Leading Companies</h2>

// list itemt const
const expItem = [
    {
        subtitle: "Boxsouth University",
        imgUrl: "assets/images/exp/01.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Master Degree Visual Art & Design",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
    {
        subtitle: "Meddout Ltd.",
        imgUrl: "assets/images/exp/02.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Senior UI/UX Designer",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
    {
        subtitle: "Plays.tv University",
        imgUrl: "assets/images/exp/03.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Master Degree Visual Art & Design",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
    {
        subtitle: "Timeuest Ltd.",
        imgUrl: "assets/images/exp/04.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Senior UI/UX Designer",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
    {
        subtitle: "Playwell University",
        imgUrl: "assets/images/exp/05.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Master Degree Visual Art & Design",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
    {
        subtitle: "Trackbox Ltd.",
        imgUrl: "assets/images/exp/06.png",
        imgAlt: "experience",
        expCat: "2014 - 2019",
        title: "Junior Graphic Designer",
        desc: "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information",
    },
]

class Experience extends Component {
    render() {
        return (
            <section className="experience padding-tb text-start" id='Resume'>
                <div className="container">
                    <div className="section-header">
                        <div className="title">
                            <SectionHeader
                                cattitle={ cattitle } 
                                title={ title }
                            />
                        </div>
                    </div>
                    <div className="section-wrapper">
                        {expItem.map( (val, i) => (
                            <div className="exp-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
                                <div className="exp-inner">
                                    <div className="exp-thumb">
                                        <img 
                                            src={`${val.imgUrl}`} 
                                            alt={`${val.imgAlt}`}
                                        />
                                        <h6>{val.subtitle}</h6>
                                        <div className="exp-cata">
                                            <span>{val.expCat}</span>
                                        </div>
                                    </div>
                                    <div className="exp-content">
                                        <h3>{val.title}</h3>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <a className="btn" href="#" download><span>Download My CV</span><img src="assets/images/icon/btn-1.png" alt="icon" className="img-fluid" /></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;