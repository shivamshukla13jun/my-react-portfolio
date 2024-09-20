import React, { Component } from 'react';
import SectionHeader from '../layout/section-header';

const subtitle = <h3>Welcome to My Portfolio</h3>
const title = <h2>Why <span>3650 People</span> Love Us Believe My Awesome Services</h2>

const cattitle2 = <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">Hello World</span>
const title2 = <h2 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">I am <span>Shivam Shukla</span> Mern Stack Developer From India. </h2>
const desc = <p className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Energisticaly Simplify Toping Line Solutions without Leveraged Resutrs are an Colabrerse Channels Throughe Qrthogonal e-Commerce Energistcaly Growing Practve Anding Platform Niches After Paralel Technolog</p>
const btnText = "Download Resume"
const aboutRightUl= [
    {
        LeftContent: 'Name',
        RightContent: 'Shivam Shukla',
    },
    {
        LeftContent: 'Date of Birth',
        RightContent: '13 Jun 1997',
    },
    {
        LeftContent: 'Email',
        RightContent: 'shivam13jun@gmail.com',
    },
    {
        LeftContent: 'Phone',
        RightContent: '+8459 784 241',
    },
    {
        LeftContent: 'Nationality',
        RightContent: 'Indian',
    },
 
]

class About extends Component {
    render() {
        return (
            <section className="about padding-tb text-start" id="About">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="about-left">
                            <div className="title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <SectionHeader
                                subtitle={ subtitle } 
                            />
                                
                            </div>
                            <div className="about-thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <img src="assets/images/about/01.png" alt="about" className="img-fluid" />
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="about-item">
                                <div className="title">
                                <SectionHeader
                                    cattitle={ cattitle2 }
                                    title={ title2 }
                                />
                                </div>
                                <div className="about-content wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <ul>
                                        {aboutRightUl.map( (val, i) => (
                                            <li key={i}>
                                                <div className="name">
                                                    <p>{val.LeftContent}</p>
                                                </div>
                                                <div className="info">
                                                    <p>{val.RightContent}</p>
                                                </div>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                                <a className="btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" href="/Shivam Shukla.pdf" download><span>{btnText}</span><img src="assets/images/icon/btn-1.png" alt="icon" className="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
		</section>
        );
    }
}

export default About;