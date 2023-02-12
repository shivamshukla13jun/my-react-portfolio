import React, { Component } from 'react';
const title = "Post categories";
let CatagoriListName= [
    {
        Name: 'Template',
        Count: '05',
    },
    {
        Name: 'Codecanyon',
        Count: '08',
    },
    {
        Name: 'Graphicriver',
        Count: '05',
    },
    {
        Name: 'Photodune',
        Count: '07',
    },
    {
        Name: 'Videohive',
        Count: '05',
    },
    {
        Name: '3docean',
        Count: '05',
    },
    {
        Name: 'WordPress',
        Count: '05',
    },
    {
        Name: 'Joomla',
        Count: '25',
    },
]

class CatagoriList extends Component {
    render() {
        return (
            <div className="post-catagori">
                <h4>{title}</h4>
                <ul>
                {CatagoriListName.map( (val, i) => (
                    <li key={i}><a href="#">{val.Name}</a><span>{val.Count}</span></li>
                ))}
                </ul>
            </div>
        );
    }
}

export default CatagoriList;