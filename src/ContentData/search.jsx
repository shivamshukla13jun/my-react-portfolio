
import React, { Component } from 'react';
const title = "Search Keyword";

class SearchArea extends Component {
    render() {
        return (
            <div className="widget-search">
                <h4>{title}</h4>
                <form action="action">
                    <input type="text" placeholder="Search Here..." name="s" />
                    <button type="submit"><i className="icofont-search-2"></i></button>
                </form>
            </div>
        );
    }
}

export default SearchArea;


