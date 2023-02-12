import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const title = "Popular Tags";
let tagNameList= [
    {
        tagName: 'design',
    },
    {
        tagName: 'template',
    },
    {
        tagName: 'codecanyon',
    },
    {
        tagName: 'videohive',
    },
    {
        tagName: 'audiojungle',
    },
    {
        tagName: '3docean',
    },
    {
        tagName: 'design',
    },
    {
        tagName: 'template',
    },
    {
        tagName: 'codecanyon',
    },
]

class PopulatTag extends Component {
    render() {
        return (
            <div className="widget-tags">
                <h4>{title}</h4>		
                <ul>
                    {tagNameList.map( (val, i) => (
                        <li key={i}>
                            <Link to="#">{val.tagName}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PopulatTag;