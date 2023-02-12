import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const title = "02 Comment";

let CommentContentList= [
    {
        imgUrl: 'assets/images/blog/com/01.png',
        imgAlt: 'comment thumb',
        commentAuthor: 'Robot Linsamu',
        commentDate: 'May 09, 2022 at 12:41 pm',
        commentContent: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
        commentReply: 'Reply',
    },
    {
        imgUrl: 'assets/images/blog/com/02.png',
        imgAlt: 'comment thumb',
        commentAuthor: 'Ummi Nishat',
        commentDate: 'May 10, 2022 at 12:41 pm',
        commentContent: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
        commentReply: 'Reply',
    },
    {
        imgUrl: 'assets/images/blog/com/03.png',
        imgAlt: 'comment thumb',
        commentAuthor: 'Linsamu Faith',
        commentDate: 'May 11, 2022 at 12:41 pm',
        commentContent: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
        commentReply: 'Reply',
    },
]

class CommentSection extends Component {
    render() {
        return (
            <div id="comments" className="comments">
                <h4 className="title-border">{title}</h4>
                <ul className="comment-list">
                    {CommentContentList.map((val, i) => (
                        <li className="comment" id="li-comment-1" key={i}>
                            <div className="com-thumb">
                                <img 
                                    src={`${val.imgUrl}`} 
                                    alt={`${val.imgAlt}`} 
                                />          
                            </div>
                            <div className="com-content">
                                <div className="com-title">
                                    <div className="com-title-meta">
                                        <h4> {val.commentAuthor} </h4>
                                        <span> {val.commentDate} </span>
                                    </div>
                                    <span className="reply">
                                        <a href="/" className="comment-reply-link"><i className="icofont-reply"></i> {val.commentReply}</a>        
                                    </span>
                                </div>
                                <p>{val.commentContent}</p>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

export default CommentSection;






