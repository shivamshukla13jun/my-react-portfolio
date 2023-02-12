import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../layout/section-header';

const cattitle= <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">Pricing Plan</span>
const title= <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">No Hidden Charge,Choose Your <span>Best Pricing Plan</span></h2>


let PricingItem = [
    {
        title: "Silver Plan",
        desc: "Holisticly initiate functionalized information without viral imperatives.",
        usd: "Usd",
        amount: "$20",
        amdesc: "/ Onetime",
        subdesc: "For Onetime Services only",
        btnText: 'Choose Plan',
        PriceFeatureList: [
            {
                featureText: '4 Hosting Attendance'
            },
            {
                featureText: '9 Email Marketing'
            },
            {
                featureText: '3 Data Bases'
            },
            {
                featureText: '2 Design Pack'
            },
            {
                featureText: '3 Website Layouts'
            },
            {
                featureText: '5 Header Style'
            },
        ]
    },
    {
        title: "Gold Plan",
        desc: "Holisticly initiate functionalized information without viral imperatives.",
        usd: "Usd",
        amount: "$39",
        amdesc: "/ Onetime",
        subdesc: "For Onetime Services only",
        btnText: 'Choose Plan',
        PriceFeatureList: [
            {
                featureText: '4 Hosting Attendance'
            },
            {
                featureText: '9 Email Marketing'
            },
            {
                featureText: '3 Data Bases'
            },
            {
                featureText: '2 Design Pack'
            },
            {
                featureText: '3 Website Layouts'
            },
            {
                featureText: '5 Header Style'
            },
        ]
    },
    {
        title: "Platinum Plan",
        desc: "Holisticly initiate functionalized information without viral imperatives.",
        usd: "Usd",
        amount: "$69",
        amdesc: "/ Onetime",
        subdesc: "For Onetime Services only",
        btnText: 'Choose Plan',
        PriceFeatureList: [
            {
                featureText: '4 Hosting Attendance'
            },
            {
                featureText: '9 Email Marketing'
            },
            {
                featureText: '3 Data Bases'
            },
            {
                featureText: '2 Design Pack'
            },
            {
                featureText: '3 Website Layouts'
            },
            {
                featureText: '5 Header Style'
            },
        ]
    },
]

class Pricing extends Component {
    render() {
        return (
            <section className="pricing padding-tb text-start" id='Pricing'>
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
                        {PricingItem.map( (val, i) => (
                            <div className="pricing-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
                                <div className="pricing-inner">
                                    <div className="pricing-content">
                                        <div className="pricing-header">
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                        <div className="pricing-body">
                                            <div className="pricing-title">
                                                <h5>{val.usd}</h5>
                                                <h3>{val.amount}<span>{val.amdesc}</span></h3>
                                                <p>{val.subdesc}</p>
                                            </div>
                                            <ul className="pricing-list">
                                                {val.PriceFeatureList.map( (feature, index) =>(
                                                    <li key={index}>{feature.featureText}</li>
                                                ))}
                                            </ul>
                                            <div className="text-center">
                                                <Link to="#" className="btn">{val.btnText}<i className="icofont-rounded-double-right"></i></Link>
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

export default Pricing;