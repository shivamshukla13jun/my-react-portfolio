import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

let portfolioList= [
    {
      title: "C3 Express ",
      imgUrl:"https://images.unsplash.com/photo-1690999389827-680a30215234?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Genx a leading IT solutions provider baed UAE Company",
      portLink:"https://c3xpress.com/",
      tags:["Reactjs","Nodejs"]
    },
    {
      title: "Security Tool",
      imgUrl:"https://media.istockphoto.com/id/2151954310/photo/shield-security-network-technology-wire-frame-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=dXCjIveEjelzAWqLkt3Hu6LXYhBSyH5vJAcCXhr06k8=",
      desc: "Secure a Site",
      portLink:"https://securitytool.handsintechnology.in/",
      tags:["Rectjs","Nodejs","Socket.io"]
    },
    {
      title: "Last Minute Policy",
      imgUrl:"https://media.istockphoto.com/id/1295819436/photo/selective-focus-of-magnifying-glass-glasses-and-insurance-policy-letter-on-a-white-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=oY7mTtRim2v8pav2C4xPnIoMcTEt6ETxI4V9fckGgK0=",
      desc: "Last Minute policy",
      portLink:"https://lmpfrontend.handsintechnology.in/",
      tags:["Rectjs","Nodejs"]
    },
    ]
class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio padding-tb text-start" id='Portfolio'>
                <div className="container">
                    <div className="portfolio-top">
                        <div className="portfolio-left">
                            <div className="section-header">
                                <div className="title">
                                    <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">My Portfolio</span>
                                    <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">We Have Done Lot's of <span>My Best Works</span> Lets Check Some of Them</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="grid wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            {portfolioList.map( (val, i) => (
                               <>
                                <div className="grid-item g-img" key={i}>
                                    <div className="grid-inner">
                                        <div className="thumb">
                                            <img 
                                            className='img-thumbnail img-responsive'
                                                src={`${val.imgUrl}`} 
                                                alt={`${val.imgAlt}`} 
                                                // width={400}
                                                // height={300}
                                            />
                                            <div className="thumb-icon">
                                                <a href={`${val.portLink}`} target='_blank' ><i className="icofont-link"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <span class="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">{val.title}</span>
                                  
                                </div>

                               
                               </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;

