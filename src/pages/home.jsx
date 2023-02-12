import React, { Component, Fragment } from 'react';

import Banner from '../layout/banner';
import Footer from '../layout/footer';
import BoxLayout from '../box-layout/BoxLayout';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="App">
                    <div className="shape-top"></div>
                    <div className="shape-bottom"></div>
                    <Banner />
                    <BoxLayout />
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default Home;