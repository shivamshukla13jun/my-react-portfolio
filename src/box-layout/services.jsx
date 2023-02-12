import React, { Component } from 'react';

import SectionHeader from '../layout/section-header';
import Techstack from './techStack';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
  } from "react-icons/di";
  import {
	SiPytorch,
	SiFirebase,
	SiNextdotjs,
	SiExpress,
  } from "react-icons/si";

const cattitle = <span className="category wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">My Services</span>;
const title = <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">We Have Done Lot's of <span>My Best Services</span> Lets Check Some of Them</h2>


const ServicesList = [
    {
		icon:<img src='/assets/Express-JS-logo.jpg' width={150}/>,
		imgUrl: "assets/images/service/01.png",
		imgAlt: 'service',
    },
	{
		icon: <DiNodejs  style={{fontSize:"110px"}} />,
		imgUrl: "assets/images/service/01.png",
		imgAlt: 'service',
    },
	{
        title: 'Reactjs',
		icon: <DiReact  className="tech-icons" />,
		imgUrl: "assets/images/service/01.png",
		imgAlt: 'service',
    },
	{
        title: 'Mongodb',
		icon: <DiMongodb  className="tech-icons"/>,
		imgUrl: "assets/images/service/01.png",
		imgAlt: 'service',
    },
   
]




class Services extends Component {
    render() {
        return (
			<>
			 <section className="services padding-tb text-start" id='Services'>
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
					{ServicesList.map( (val , i) => (
						<div className="service-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={i}>
							<div className="service-inner">
								<div className="service-content d-flex align-items-center">
									<h3>{val.title?val.title:""}  {val.icon}</h3>
								</div>
								<div className="service-thumb">
									<img
                                        src={`${val.imgUrl}`} 
                                        alt={`${val.imgAlt}`}
                                    />

								</div>

							</div>
						</div>
					))}
				</div>
			</div>
		</section>
			</>
           
        );
    }
}

export default Services;