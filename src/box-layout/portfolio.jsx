import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

let portfolioList= [
    {
      title: "Genx (E-commerce)",
      imgUrl:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      desc: "Genx a leading IT solutions provider baed UAE Company",
      portLink:"https://genx.ae/",
      tags:["Reactjs","Nodejs"]
    },
    {
      title: "Python Compiler",
      imgUrl:"https://img.freepik.com/premium-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg?w=740",
      desc: "Executing python code real tim ",
      portLink:"https://educobottask.handsintechnology.in/",
      tags:["Rectjs","Nodejs","Socket.io"]
    },
    {
      title: "Netflix Clone",
      imgUrl:"https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBzdHJlYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      desc: "Netflix clone",
      portLink:"https://github.com/shivamshukla13jun/netflixclone",
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
                                                src={`${val.imgUrl}`} 
                                                alt={`${val.imgAlt}`} 
                                            />
                                            <div className="thumb-icon">
                                                <a href={`${val.portLink}`} ><i className="icofont-link"></i></a>
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

