import React, { Component } from 'react';
import Banner_bottom from './banner_bottom';
import Sponsor from './sponsor';
import About from './about';
import Experience from './experience';
import Services from './services';
import Portfolio from './portfolio';
import Pricing from './pricing';
import Testimonial from './testimonial';
import Blog from './blog';
import Contact from './contact';

class BoxLayout extends Component {
    render() {
        return (
            <div className="box-shadow-style">
                <Banner_bottom />
                <About />
                {/* <Sponsor /> */}
                {/* <Experience /> */}
                <Services />
                <Portfolio />
                {/* <Pricing /> */}
                {/* <Testimonial /> */}
                {/* <Blog /> */}
                {/* <Contact /> */}
            </div>
        );
    }
}

export default BoxLayout;