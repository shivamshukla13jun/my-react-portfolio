import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const title = "Alax Instagram";
let instagramThumbList= [
    {
        imgUrl: 'assets/images/blog/ins/01.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/02.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/03.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/04.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/05.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/06.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/07.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/08.jpg',
        imgAlt: 'instagram post',
    },
    {
        imgUrl: 'assets/images/blog/ins/09.jpg',
        imgAlt: 'instagram post',
    },
]

class InstagramThumb extends Component {
    render() {
        return (
            <div className="widget-instagram">
                <h4>{title}</h4>
                <ul>
                    {instagramThumbList.map( (val, i) => (
                        <li key={i}>
                            <img 
                                src={`${val.imgUrl}`} 
                                alt={`${val.imgAlt}`} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default InstagramThumb;