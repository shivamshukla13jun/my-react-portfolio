import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const title = "Most Popular Posts";
let RecentPostList= [
    {
        postTitle: 'Fouate Revunry And Mare Fnger Tache Fanny',
        postDate: '11 April 2022',
        postThumb: 'assets/images/blog/rec/01.jpg',
        postAlt: 'recent post',
    },
    {
        postTitle: 'Fouate Revunry And Mare Fnger Tache Fanny',
        postDate: '11 April 2022',
        postThumb: 'assets/images/blog/rec/02.jpg',
        postAlt: 'recent post',
    },
    {
        postTitle: 'Fouate Revunry And Mare Fnger Tache Fanny',
        postDate: '11 April 2022',
        postThumb: 'assets/images/blog/rec/03.jpg',
        postAlt: 'recent post',
    },
    {
        postTitle: 'Fouate Revunry And Mare Fnger Tache Fanny',
        postDate: '11 April 2022',
        postThumb: 'assets/images/blog/rec/04.jpg',
        postAlt: 'recent post',
    },
]

class RecentPost extends Component {
    render() {
        return (
            <div className="widget-rec-post">
                <h4>{title}</h4>		
                <ul className="recent-post">
                {RecentPostList.map( (val, i) => (
                    <li key={i}>
                        <div className="rec-content">
                            <h6><Link to="/Blog_single">{val.postTitle}</Link></h6>
                            <span>{val.postDate}</span>
                        </div>
                        <div className="rec-thumb">
                            <Link to="/Blog_single">
                                <img 
                                    src={`${val.postThumb}`} 
                                    alt={`${val.postAlt}`} 
                                />
                            </Link>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}

export default RecentPost;