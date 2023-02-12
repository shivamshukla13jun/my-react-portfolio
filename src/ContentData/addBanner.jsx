import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const title = "Ad Banner Place";

class AddBanner extends Component {
    render() {
        return (
            <div className="widget-add">
                <h4>{title}</h4>
                <Link to="#"><img src="assets/images/add/01.jpg" alt="add" /></Link>
            </div>
        );
    }
}

export default AddBanner;